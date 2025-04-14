import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
  return (
    <div className="admin-container">
      <nav className="admin-sidebar">
        <h2>Admin Menu</h2>
        <ul>
          <li>
            <Link to="/admin/add-recipe">Tambah Resep</Link>
          </li>
          <li>
            <Link to="/admin/manage-recipes">Kelola Resep</Link>
          </li>
        </ul>
      </nav>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
