from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    prep_time = serializers.IntegerField(default=0, required=False, allow_null=True)
    cook_time = serializers.IntegerField(default=0, required=False, allow_null=True)
    servings = serializers.IntegerField(default=1, required=False, allow_null=True)
    image = serializers.CharField(required=False, allow_null=True, allow_blank=True)
    
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'image', 'ingredients', 'instructions', 
                 'category', 'prep_time', 'cook_time', 'servings']
        extra_kwargs = {
            'category': {'required': False, 'allow_blank': True}
        }
