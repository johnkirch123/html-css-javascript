const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  set: {
    type: String,
    required: true
  },
  modelNumber: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    required: true
  },
  images: [String]
});

module.exports = Product = mongoose.model("products", ProductSchema);
