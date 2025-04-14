from django.core.management.base import BaseCommand
from recipes.models import Recipe
import json
from pathlib import Path

class Command(BaseCommand):
    help = 'Seed the database with sample recipes from part1-7 JSON files'

    def handle(self, *args, **options):
        # List of recipe files to process
        recipe_files = [
            'part1_recipes.json',
            'part2_recipes.json', 
            'part3_recipes.json',
            'part4_recipes.json',
            'part5_recipes.json',
            'part6_recipes.json',
            'part7_recipes.json'
        ]
        
        total_seeded = 0
        
        for recipe_file in recipe_files:
            data_file = Path(__file__).parent.parent.parent.parent / 'data' / recipe_file
            
            try:
                with open(data_file, 'r', encoding='utf-8') as f:
                    recipes = json.load(f)
                    file_count = 0
                    
                    for recipe_data in recipes:
                        # Skip if recipe already exists
                        if not Recipe.objects.filter(title=recipe_data['title']).exists():
                            Recipe.objects.create(
                                title=recipe_data['title'],
                                ingredients='\n'.join(recipe_data['ingredients']),
                                instructions=recipe_data['instructions'],
                                image=recipe_data.get('image', '')
                            )
                            file_count += 1
                    
                    total_seeded += file_count
                    self.stdout.write(
                        self.style.SUCCESS(
                            f'Processed {recipe_file}: {file_count} new recipes seeded'
                        )
                    )
                    
            except FileNotFoundError:
                self.stdout.write(
                    self.style.WARNING(f'File not found: {recipe_file}')
                )
            except Exception as e:
                self.stdout.write(
                    self.style.ERROR(f'Error processing {recipe_file}: {str(e)}')
                )
        
        self.stdout.write(
            self.style.SUCCESS(
                f'Completed! Total new recipes seeded: {total_seeded}'
            )
        )
