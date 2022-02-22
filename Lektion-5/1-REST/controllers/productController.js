const router = require('express').Router();
const productModel = require('../models/products/productModel');
const auth = require('../authentication/auth');

// Get all products
router.get('/', productModel.getProducts);

//Get one product by id
router.get('/:id', productModel.getProductById);

//create new product
router.post('/', auth.verifyToken, productModel.createProduct);

// Update product
router.patch('/:id', auth.verifyToken, productModel.updateProduct);
router.put('/:id', auth.verifyToken, productModel.updateProduct);

//Delete product
router.delete('/:id', auth.verifyToken, productModel.deleteProduct);


module.exports = router;