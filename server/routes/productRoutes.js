const express = require('express');
const productController = require('../controllers/productController')
const router = express.Router();
router
.route("/")
.get(productController.getAllProducts)
.post(productController.createNewProduct)
router.route('/:id')
.get(productController.checkIdInParams,productController.getProductById)
.delete(productController.checkIdInParams,productController.deleteProductById)

module.exports = router