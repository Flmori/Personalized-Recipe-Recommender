import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewRecipe } from '../api/recipeService';

const AddRecipeForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        instructions: '',
        image: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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
        
        try {
            const payload = {
                ...formData,
                ingredients: formData.ingredients.split('\n').filter(i => i.trim()),
                image: formData.image || ''  // Ensure image is sent as an empty string if not provided
            };
            await addNewRecipe(payload);
            navigate('/');
        } catch (err) {
            setError('Gagal menambahkan resep. Silakan coba lagi.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2>Tambah Resep Baru</h2>
            {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}
            
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Judul Resep:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Bahan-bahan (pisahkan dengan enter):</label>
                    <textarea
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                        required
                        rows={5}
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Cara Membuat:</label>
                    <textarea
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleChange}
                        required
                        rows={8}
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>URL Gambar (opsional):</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{
                        padding: '10px 15px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    {isSubmitting ? 'Menyimpan...' : 'Simpan Resep'}
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
