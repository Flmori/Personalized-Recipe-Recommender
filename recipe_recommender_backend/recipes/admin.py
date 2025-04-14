from django.contrib import admin
from .models import Recipe

from django import forms

class RecipeAdminForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['category'].required = False
        self.fields['prep_time'].required = False
        self.fields['cook_time'].required = False
        self.fields['servings'].required = False

@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    form = RecipeAdminForm
    list_display = ('title', 'category', 'prep_time', 'cook_time', 'servings')
    search_fields = ('title', 'ingredients')
    fieldsets = (
        (None, {
            'fields': ('title', 'image', 'ingredients', 'instructions')
        }),
        ('Optional Information', {
            'fields': ('category', 'prep_time', 'cook_time', 'servings'),
            'classes': ('collapse',)
        }),
    )
