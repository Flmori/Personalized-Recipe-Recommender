import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllRecipes, deleteRecipe } from '../api/recipeService';
import './ManageRecipes.css';

const ManageRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getAllRecipes();
        setRecipes(data);
      } catch (err) {
        setError('Gagal memuat resep');
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus resep ini?')) {
      try {
        await deleteRecipe(id);
        setRecipes(recipes.filter(recipe => recipe.id !== id));
      } catch (err) {
        setError('Gagal menghapus resep');
      }
    }
  };

  if (loading) return <div className="loading">Memuat resep...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="manage-recipes">
      <h2>Kelola Resep</h2>
      <Link to="/admin/add-recipe" className="add-button">
        Tambah Resep Baru
      </Link>
      
      <div className="recipe-table">
        <div className="table-header">
          <div>Judul</div>
          <div>Aksi</div>
        </div>
        
        {recipes.map(recipe => (
          <div key={recipe.id} className="table-row">
            <div>{recipe.title}</div>
            <div className="actions">
              <Link to={`/admin/edit-recipe/${recipe.id}`} className="edit-button">
                Edit
              </Link>
              <button 
                onClick={() => handleDelete(recipe.id)}
                className="delete-button"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageRecipes;
