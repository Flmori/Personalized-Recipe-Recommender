from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=200)
    image = models.CharField(max_length=255, blank=True, null=True)
    ingredients = models.TextField()
    instructions = models.TextField()
    category = models.CharField(max_length=100, blank=True)
    prep_time = models.IntegerField(default=0)  # in minutes
    cook_time = models.IntegerField(default=0)  # in minutes
    servings = models.IntegerField(default=1)

    def __str__(self):
        return self.title
