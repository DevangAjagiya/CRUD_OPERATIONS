const Product = require('./Models/Product.Models.js');
const productRoutes = require('./routes/productRoutes.js');

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', productRoutes);

app.post('/api/products', async (req, res) => {
  try{
   const product = await Product.create(req.body);
   res.status(200).json({product});
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
});

app.get('/api/products', async (req, res) => {
  try{
    const products = await Product.find();
    res.status(200).json({products});
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
});

app.get('/api/products/:id', async (req, res) => {
  try{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json({product});
      
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
});

app.get('/', (req, res) => {
    res.send("Hello World Devang crud operations");
});

// update product

app.put('/api/products/:id', async (req, res) => {
  try{
    const {id} = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body, { new: true }); 

    if(!product){
      return res.status(404).json({message: "Product not found"});
    }
    res.status(200).json({product});
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
});

// delete product

app.delete('/api/products/:id', async (req, res) => {
  try{
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);

    if(!product){
      return res.status(404).json({message: "Product not found"});
    }
    res.status(200).json({message: "Product deleted successfully"});
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
});

mongoose.connect("mongodb+srv://devang:Devang63@backend.s7uia.mongodb.net/?retryWrites=true&w=majority&appName=Backend")
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");  
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });