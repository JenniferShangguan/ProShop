import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
const router = express.Router();

// @desc   Fetch all products
// @route  GET /api/products
// @access Public
router.get('/', async (req, res) => {
  
  try {
    const products = await Product.find({});
    res.json(products)
  } catch (e) {
    res.status(500).json({ message: "Not authorized" })
  }
  // res.status(401)
  // throw new Error('Not authorized')
  // res.status(500).json({ message: "Not authorized" })
  
})


// @desc   Fetch single product
// @route  GET /api/products/:id
// @access Public
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product)
    console.log(req.params.id)
  } catch (e) {
    res.status(404).json({ message: "Product not found" })
  }
})

export default router;