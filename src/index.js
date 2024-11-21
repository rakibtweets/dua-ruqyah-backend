const app = require('./app');
const {
  getCategories,
  getSubcategories,
  getDuasBySubcategoryId,
  getDuas,
  getDuasByCategoryId
} = require('./controllers/category-controller');
const PORT = process.env.PORT || 5000;

// Endpoint to fetch categories
app.get('/categories', getCategories);

// Endpoint to fetch subcategories by category
app.get('/categories/:id/subcategories', getSubcategories);

// Endpoint to fetch duas by subcategory
app.get('/subcategories/:id/duas', getDuasBySubcategoryId);

// get all duas
app.get('/duas', getDuas);

// get duas by categoryId
app.get('/categories/:id/duas', getDuasByCategoryId);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
