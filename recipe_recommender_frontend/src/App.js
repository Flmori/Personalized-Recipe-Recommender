import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import RecipeList from './components/RecipeList';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeDetail from './components/RecipeDetail';
import EnhancedAddRecipeForm from './components/EnhancedAddRecipeForm';
import AdminPanel from './components/AdminPanel';
import ManageRecipes from './components/ManageRecipes';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/admin" element={<AdminPanel />}>
            <Route path="add-recipe" element={<EnhancedAddRecipeForm />} />
            <Route path="manage-recipes" element={<ManageRecipes />} />
            <Route path="edit-recipe/:id" element={<EditRecipeForm />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
