const Product = require('../models/productModel');

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

const addProduct = async (req, res) => {
  const { name, description, price, countInStock } = req.body;
  const product = new Product({ name, description, price, countInStock });
  await product.save();
  res.status(201).json(product);
};

module.exports = { getProducts, addProduct };