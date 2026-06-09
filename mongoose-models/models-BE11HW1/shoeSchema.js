// 2

const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    category: String,

    description: String,

    imageUrl: String,

    price: Number,

    colors: [String],

    sizes: [Number],

    stock: {
      type: Number,
      default: 0,
    },

    isNewArrival: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shoe", shoeSchema);