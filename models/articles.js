// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const articleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  infos: {
    type: String,
  },
  image: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Article", articleSchema);
