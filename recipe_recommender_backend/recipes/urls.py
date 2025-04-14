from django.urls import path
from . import views

urlpatterns = [
    path('recipes/', views.RecipeListCreate.as_view(), name='recipe-list'),
    path('recipes/<int:pk>/', views.RecipeRetrieveUpdateDestroy.as_view(), name='recipe-detail'),
]
