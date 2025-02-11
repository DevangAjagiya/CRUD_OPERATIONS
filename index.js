const Product = require('./Models/Product.Models.js');

const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

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

app.get('/', (req, res) => {
    res.send("Hello World Devang crud operations");
});



mongoose.connect("mongodb+srv://devang:Devang63@backend.s7uia.mongodb.net/?retryWrites=true&w=majority&appName=Backend")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");  
  });

  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });