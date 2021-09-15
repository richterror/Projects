const router = require('express').Router();
const productModel = require('../models/products/productModel');
const auth = require('../authentication/auth');

// Endpoints
router.get('/', productModel.getProducts);
router.get('/:id', productModel.getProduct);

// auth.verifyToken = middleware som kollar att user har en token
router.post('/new', auth.verifyToken, productModel.createProduct);

router.patch('/:id', auth.verifyToken, productModel.updateProduct);

router.delete('/:id', auth.verifyToken, productModel.deleteProduct);

module.exports = router;