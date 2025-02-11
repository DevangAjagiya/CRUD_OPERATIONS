const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send("Hello World Devang crud operations");
});

app.post('/API/Products', (req, res) => {
    console.log(req.body);
    res.send(Request.body);
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