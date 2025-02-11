const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({

    name: {
      type: String,
      required: [true, "Please enter Name is required"]
    },

    email: {
      type: String,
      required: [true, "Please enter Email is required"]
    },

    quantity: {
      type: Number,
      required: [true, "Please enter Quantity is required"],
      default: 0
    },

    price: {
      type: Number,
      required: [true, "Please enter Price is required"]
    },  

    image: {
      type: String,
      required: false
    },
 
},
{
  Timestamp: true
}
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product; 