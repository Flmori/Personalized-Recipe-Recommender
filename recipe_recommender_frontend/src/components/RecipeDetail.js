import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../api/recipeService';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const recipeData = await getRecipeDetails(id);
                setRecipe(recipeData);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (isLoading) return <div>Loading recipe details...</div>;
    if (!recipe) return <div>Recipe not found</div>;

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2>{recipe.title}</h2>
            {recipe.image && (
                <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
                />
            )}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                    <h3>Ingredients</h3>
                    <p style={{ whiteSpace: 'pre-line' }}>{recipe.ingredients}</p>
                </div>
                <div>
                    <h3>Instructions</h3>
                    <p style={{ whiteSpace: 'pre-line' }}>{recipe.instructions}</p>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;
