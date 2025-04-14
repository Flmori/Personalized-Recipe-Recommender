import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getRecipeDetails, updateRecipe } from '../api/recipeService';
import './EnhancedAddRecipeForm.css';

const EditRecipeForm = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        instructions: '',
        image: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipe = async () => {
            const recipe = await getRecipeDetails(id);
            if (recipe) {
                setFormData({
                    title: recipe.title,
                ingredients: recipe.ingredients,
                    instructions: recipe.instructions,
                    image: recipe.image
                });
            }
        };
        fetchRecipe();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccess(false);
        
        try {
            const updateData = {
                title: formData.title,
                ingredients: formData.ingredients,
                instructions: formData.instructions,
                image: formData.image || '',
                prep_time: 0,  // Adding default values required by serializer
                cook_time: 0,
                servings: 1,
                category: ''
            };
            console.log('Sending update data:', updateData);
            await updateRecipe(id, updateData);
            setSuccess(true);
            setTimeout(() => navigate('/admin/manage-recipes'), 2000);
        } catch (err) {
            setError('Gagal memperbarui resep. Silakan coba lagi.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Edit Resep</h2>
            
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">Resep berhasil diperbarui!</div>}
            
            <form onSubmit={handleSubmit} className="recipe-form">
                <div className="form-group">
                    <label className="form-label">Judul Resep*</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Masukkan judul resep"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Bahan-bahan*</label>
                    <textarea
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="form-textarea"
                        placeholder="Pisahkan bahan-bahan dengan enter"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Cara Membuat*</label>
                    <textarea
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleChange}
                        required
                        rows={8}
                        className="form-textarea"
                        placeholder="Tulis langkah-langkah pembuatan"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">URL Gambar</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Masukkan URL gambar (opsional)"
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="submit-button"
                >
                    {isSubmitting ? (
                        <span className="button-loading">
                            <span className="spinner"></span> Menyimpan...
                        </span>
                    ) : 'Simpan Resep'}
                </button>
            </form>
        </div>
    );
};

export default EditRecipeForm;
