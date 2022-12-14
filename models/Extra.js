const mongoose = require("mongoose");

const ExtraSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Extra", ExtraSchema);
