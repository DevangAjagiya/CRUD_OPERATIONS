const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/product.controller.js');

// Example usage of router
router.get('/', getProducts);




