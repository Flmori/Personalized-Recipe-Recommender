import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RecipeList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { recipes } = location.state || { recipes: [] };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Recommended Recipes</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <div key={recipe.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
                            <h3>{recipe.title}</h3>
                            {recipe.image && (
                                <img 
                                    src={recipe.image} 
                                    alt={recipe.title} 
                                    style={{ maxWidth: '100%', height: '200px', objectFit: 'cover', marginBottom: '10px' }}
                                />
                            )}
                            <p style={{ 
                                display: '-webkit-box', 
                                WebkitLineClamp: 3, 
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>
                                {recipe.instructions}
                            </p>
                            <button 
                                onClick={() => navigate(`/recipes/${recipe.id}`)}
                                style={{
                                    padding: '8px 15px',
                                    backgroundColor: '#2196F3',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Lihat Detail
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No recipes found. Please add ingredients and search.</p>
                )}
            </div>
        </div>
    );
};

export default RecipeList;
