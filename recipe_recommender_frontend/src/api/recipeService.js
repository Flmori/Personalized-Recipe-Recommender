import axios from 'axios';

const API_URL = 'http://localhost:8000/api/recipes/';

// Existing functions
export const getRecipesByIngredients = async (ingredients) => {
    try {
        const response = await axios.get(API_URL, {
            params: { ingredients: ingredients.join(',') }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
};

export const getRecipeDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching recipe details:', error);
        return null;
    }
};

export const addNewRecipe = async (recipeData) => {
    try {
        // Convert ingredients array to text if needed
        const payload = {
            ...recipeData,
            ingredients: Array.isArray(recipeData.ingredients) 
                ? recipeData.ingredients.join('\n') 
                : recipeData.ingredients,
            prep_time: recipeData.prep_time || 0,
            cook_time: recipeData.cook_time || 0,
            servings: recipeData.servings || 1,
            category: recipeData.category || ''
        };
        const response = await axios.post(API_URL, payload);
        return response.data;
    } catch (error) {
        console.error('Error adding new recipe:', error.response?.data || error.message);
        throw error;
    }
};

// New functions for recipe management
export const getAllRecipes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching all recipes:', error);
        throw error;
    }
};

export const deleteRecipe = async (id) => {
    try {
        await axios.delete(`${API_URL}${id}/`);
    } catch (error) {
        console.error('Error deleting recipe:', error);
        throw error;
    }
};

export const updateRecipe = async (id, recipeData) => {
    try {
        const response = await axios.put(`${API_URL}${id}/`, recipeData);
        return response.data;
    } catch (error) {
        console.error('Error updating recipe:', error);
        throw error;
    }
};
