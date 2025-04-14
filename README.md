# Recipe Recommender Application

## Description

A web application that allows users to find, add, edit, and manage recipes. Users can search for recipes based on ingredients and view detailed instructions.

## Features

- Add new recipes with title, ingredients, instructions, and optional image.
- Edit existing recipes.
- View a list of all recipes.
- Search for recipes based on ingredients.

## Technologies Used

- Backend: Django REST Framework
- Frontend: React
- Database: SQLite

## Installation

### Prerequisites

- Ensure that Python (version 3.x) and Node.js (version 14.x or higher) are installed on your system.
- Install pip for Python package management.

### Backend Installation

Clone the repository:

```bash
git clone <https://github.com/Flmori/Personalized-Recipe-Recommender.git>
```

Navigate to the backend directory and install dependencies:

```bash
cd recipe_recommender_backend
pip install -r requirements.txt
```

Migrate the database:

```bash
python manage.py migrate
```

Seed the database with sample recipes:

```bash
python manage.py seed_recipes
```

Start the backend server:

```bash
python manage.py runserver
```

### Frontend Installation

Navigate to the frontend directory and install dependencies:

```bash
cd recipe_recommender_frontend
npm install
```

Start the frontend development server:

```bash
npm start
```

## Usage Instructions

### Adding a Recipe

- Navigate to the "Add Recipe" section in the admin panel.
- Fill in the required fields (title, ingredients, instructions) and optionally provide an image URL.
- Click "Save Recipe" to add the recipe to the database.

### Editing a Recipe

- Navigate to the "Manage Recipes" section in the admin panel.
- Select a recipe to edit and make the necessary changes.
- Click "Save Recipe" to update the recipe.

### Viewing Recipes

- Navigate to the "Recipes" section to view the list of all recipes.
- Click on a recipe title to view its details.

## Instructions for Using `seed_recipes.py`

- To add your own JSON files for seeding recipes:
  - Create a JSON file with the following structure:
    ```json
    [
      {
        "title": "Recipe Title",
        "ingredients": ["Ingredient 1", "Ingredient 2"],
        "instructions": "Cooking instructions here.",
        "image": "URL to image (optional)"
      }
    ]
    ```
  - Place your JSON file in the `data` directory of the backend.
  - Update the `seed_recipes.py` file to include your new file in the `recipe_files` list.
  - Run the seeding command:
    ```bash
    python manage.py seed_recipes
    ```

## Known Issues

- List any known issues or limitations of the application.

## Advantages

- User-friendly interface for managing recipes.
- Ability to search recipes based on ingredients.

## Disadvantages

- Limited to the recipes seeded in the database unless users add more.

## Contributing

Guidelines for contributing to the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

# Aplikasi Rekomendasi Resep

## Deskripsi

Aplikasi web yang memungkinkan pengguna untuk menemukan, menambahkan, mengedit, dan mengelola resep. Pengguna dapat mencari resep berdasarkan bahan dan melihat instruksi yang detail.

## Fitur

- Menambahkan resep baru dengan judul, bahan, instruksi, dan gambar opsional.
- Mengedit resep yang ada.
- Melihat daftar semua resep.
- Mencari resep berdasarkan bahan.

## Teknologi yang Digunakan

- Backend: Django REST Framework
- Frontend: React
- Database: SQLite

## Instalasi

### Prasyarat

- Pastikan Python (versi 3.x) dan Node.js (versi 14.x atau lebih tinggi) terinstal di sistem Anda.
- Instal pip untuk manajemen paket Python.

### Instalasi Backend

Klon repositori:

```bash
git clone <https://github.com/Flmori/Personalized-Recipe-Recommender.git>
```

Navigasi ke direktori backend dan instal dependensi:

```bash
cd recipe_recommender_backend
pip install -r requirements.txt
```

Migrasi database:

```bash
python manage.py migrate
```

Isi database dengan resep contoh:

```bash
python manage.py seed_recipes
```

Jalankan server backend:

```bash
python manage.py runserver
```

### Instalasi Frontend

Navigasi ke direktori frontend dan instal dependensi:

```bash
cd recipe_recommender_frontend
npm install
```

Jalankan server pengembangan frontend:

```bash
npm start
```

## Instruksi Penggunaan

### Menambahkan Resep

- Navigasi ke bagian "Tambah Resep" di panel admin.
- Isi kolom yang diperlukan (judul, bahan, instruksi) dan opsional berikan URL gambar.
- Klik "Simpan Resep" untuk menambahkan resep ke database.

### Mengedit Resep

- Navigasi ke bagian "Kelola Resep" di panel admin.
- Pilih resep untuk diedit dan lakukan perubahan yang diperlukan.
- Klik "Simpan Resep" untuk memperbarui resep.

### Melihat Resep

- Navigasi ke bagian "Resep" untuk melihat daftar semua resep.
- Klik pada judul resep untuk melihat detailnya.

## Instruksi untuk Menggunakan `seed_recipes.py`

- Untuk menambahkan file JSON Anda sendiri untuk mengisi resep:
  - Buat file JSON dengan struktur berikut:
    ```json
    [
      {
        "title": "Judul Resep",
        "ingredients": ["Bahan 1", "Bahan 2"],
        "instructions": "Instruksi memasak di sini.",
        "image": "URL gambar (opsional)"
      }
    ]
    ```
  - Tempatkan file JSON Anda di direktori `data` dari backend.
  - Perbarui file `seed_recipes.py` untuk menyertakan file baru Anda dalam daftar `recipe_files`.
  - Jalankan perintah pengisian:
    ```bash
    python manage.py seed_recipes
    ```

## Masalah Dikenal

- Daftar masalah atau batasan yang diketahui dari aplikasi.

## Kelebihan

- Antarmuka yang ramah pengguna untuk mengelola resep.
- Kemampuan untuk mencari resep berdasarkan bahan.

## Kekurangan

- Terbatas pada resep yang diisi dalam database kecuali pengguna menambahkan lebih banyak.

## Kontribusi

Pedoman untuk berkontribusi pada proyek.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file [LICENSE](LICENSE) untuk detailnya.
