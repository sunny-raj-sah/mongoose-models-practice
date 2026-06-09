// 2

const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    subtitle: String,

    imageUrl: String,

    servings: Number,

    prepTime: String,

    cookTime: String,

    ingredients: [String],

    directions: [String],

    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);