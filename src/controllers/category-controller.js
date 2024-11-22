const db = require('../db/database');

const getCategories = (req, res, next) => {
  db.all('SELECT * FROM category', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      console.log(rows);
      res.json(rows);
    }
  });
};

// Endpoint to fetch subcategories by category
const getSubcategories = (req, res, next) => {
  const categoryId = req.params.id;
  console.log('getSubcategories  categoryId:', categoryId);

  const query = 'SELECT * FROM sub_category WHERE cat_id = ?';

  const params = categoryId ? [categoryId] : [];
  // Execute the database query
  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (rows.length === 0) {
      res.status(404).json({ message: 'No subcategories found.' });
    } else {
      console.log('getSubcategories:');
      res.json(rows);
    }
  });
};

const getDuasByCategoryId = (req, res, next) => {
  const categoryId = req.params.id;
  console.log('getSubcategories  categoryId:', categoryId);

  const query = 'SELECT * FROM dua WHERE cat_id = ?';

  const params = categoryId ? [categoryId] : [];
  // Execute the database query
  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (rows.length === 0) {
      res.status(404).json({ message: 'No subcategories found.' });
    } else {
      console.log('getDuasByCategoryId');
      res.json(rows);
    }
  });
};

// Get duas for a specific subcategory id
const getDuasBySubcategoryId = (req, res, next) => {
  const subcategoryId = req.params.id;

  const query = 'SELECT * FROM dua WHERE subcat_id = ?';

  const params = subcategoryId ? [subcategoryId] : [];

  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (rows.length === 0) {
      res.status(404).json({ message: 'No duas found.' });
    } else {
      console.log('getDuasBySubcategoryId');
      res.json(rows);
    }
  });
};

const getDuas = (req, res, next) => {
  db.all('SELECT * FROM dua', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      // console.log('/routes/duas ');
      res.json(rows);
    }
  });
};

// get duas by dua id
const getDuasById = (req, res, next) => {
  const duaId = req.params.id;

  const query = 'SELECT * FROM dua WHERE id = ?';

  const params = duaId ? [duaId] : [];
  // Execute the database query
  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (rows.length === 0) {
      res.status(404).json({ message: 'No duas found.' });
    } else {
      console.log('getDuasById');
      res.json(rows);
    }
  });
};

module.exports = {
  getCategories,
  getSubcategories,
  getDuasBySubcategoryId,
  getDuasByCategoryId,
  getDuas,
  getDuasById
};
