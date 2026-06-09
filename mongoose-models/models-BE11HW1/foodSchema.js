// 4

const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    description: String,

    calories: {
      type: Number,
      required: true,
    },

    carbohydrates: {
      type: Number,
      required: true,
    },

    protein: {
      type: Number,
      required: true,
    },

    fat: {
      type: Number,
      required: true,
    },

    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", foodSchema);