import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecipesByIngredients } from '../api/recipeService';

const Homepage = () => {
    const [ingredients, setIngredients] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const addIngredient = () => {
        if (input) {
            setIngredients([...ingredients, input]);
            setInput('');
        }
    };

    const removeIngredient = (index) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    const searchRecipes = async () => {
        if (ingredients.length === 0) return;
        
        setIsLoading(true);
        try {
            const recipes = await getRecipesByIngredients(ingredients);
            navigate('/recipes', { state: { recipes } });
        } catch (error) {
            console.error('Error searching recipes:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Personalized Recipe Recommender</h1>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter an ingredient"
                    style={{ padding: '8px', marginRight: '10px' }}
                />
                <button 
                    onClick={addIngredient}
                    style={{ padding: '8px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
                >
                    Add Ingredient
                </button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {ingredients.map((ingredient, index) => (
                    <li key={index} style={{ margin: '5px 0', padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
                        {ingredient}
                        <button 
                            onClick={() => removeIngredient(index)}
                            style={{ padding: '4px 8px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px' }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <button 
                onClick={searchRecipes}
                disabled={ingredients.length === 0 || isLoading}
                style={{ 
                    padding: '10px 20px', 
                    backgroundColor: ingredients.length === 0 ? '#cccccc' : '#2196F3', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    marginTop: '20px',
                    cursor: ingredients.length === 0 ? 'not-allowed' : 'pointer'
                }}
            >
                {isLoading ? 'Searching...' : 'Cari Resep'}
            </button>
        </div>
    );
};

export default Homepage;
