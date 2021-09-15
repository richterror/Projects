const express = require('express');
const app = express();
const cors = require('cors');

// Importerar router
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const restrictedProducts = require('./controllers/restrictedProducts');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

  // Lägger till vilka routes som använder vilken controller
  app.use('/api/users', userController);
  app.use('/api/products', productController);

  // Exporterar appen 
  module.exports = app; 