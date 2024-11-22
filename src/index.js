const app = require('./app');
const {
  getCategories,
  getSubcategories,
  getDuasBySubcategoryId,
  getDuas,
  getDuasByCategoryId,
  getDuasById
} = require('./controllers/category-controller');
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Welcome to Dua API');
});

// get categories
app.get('/categories', getCategories);

// get subcategories by category id
app.get('/categories/:id/subcategories', getSubcategories);

// get all duas
app.get('/duas', getDuas);

//get duas by dua id
app.get('/duas/:id', getDuasById);

// get duas by categoryId
app.get('/categories/:id/duas', getDuasByCategoryId);

// Endpoint to fetch duas by subcategory id
app.get('/subcategories/:id/duas', getDuasBySubcategoryId);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
