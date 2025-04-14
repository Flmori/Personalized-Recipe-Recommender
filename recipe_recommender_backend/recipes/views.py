from rest_framework import generics, status
from rest_framework.response import Response
import logging
from .models import Recipe
from .serializers import RecipeSerializer

logger = logging.getLogger(__name__)

class RecipeListCreate(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        ingredients = self.request.query_params.get('ingredients', None)
        
        if ingredients:
            # Split comma-separated ingredients and remove empty strings
            ingredient_list = [i.strip().lower() for i in ingredients.split(',') if i.strip()]
            
            # Filter recipes containing all specified ingredients
            for ingredient in ingredient_list:
                queryset = queryset.filter(ingredients__icontains=ingredient)
        
        return queryset

    def create(self, request, *args, **kwargs):
        logger.info(f"Incoming request data: {request.data}")
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            logger.error(f"Validation errors: {serializer.errors}")
            return Response(
                {
                    'status': 'error',
                    'errors': serializer.errors,
                    'message': 'Invalid recipe data'
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        try:
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(
                {
                    'status': 'success',
                    'data': serializer.data,
                    'message': 'Recipe created successfully'
                },
                status=status.HTTP_201_CREATED,
                headers=headers
            )
        except Exception as e:
            logger.error(f"Error creating recipe: {str(e)}")
            return Response(
                {
                    'status': 'error',
                    'message': 'Failed to create recipe',
                    'error': str(e)
                },
                status=status.HTTP_400_BAD_REQUEST
            )

class RecipeRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
