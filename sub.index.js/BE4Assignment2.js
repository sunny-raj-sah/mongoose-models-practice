require("dotenv").config();

const express = require("express");
const {initializeDatabase} = require("../db/db.connect.js");
const Recipe = require("../mongoose-models/BE4Assignment2.recipe.model.js");

const app = express();

app.use(express.json());

initializeDatabase();

const PORT = 3000;

// 5. Create Recipe API


app.post("/recipes", async (req, res) => {
  try {
    const recipe = new Recipe(req.body);

    const savedRecipe = await recipe.save();

    res.status(201).json({
      message: "Recipe Added Successfully",
      recipe: savedRecipe,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// 6. Get All Recipes

app.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find();

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});


// 7. Get Recipe By Title

app.get("/recipes/title/:title", async (req, res) => {
  try {
    const recipe = await Recipe.findOne({
      title: req.params.title,
    });

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});




// 8. Get Recipes By Author
app.get("/recipes/author/:author", async (req, res) => {
  try {
    const recipes = await Recipe.find({
      author: req.params.author,
    });

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});


// 9. Get Easy Recipes

app.get("/recipes/difficulty/easy", async (req, res) => {
  try {
    const recipes = await Recipe.find({
      difficulty: "Easy",
    });

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});


// 10. Update Difficulty By ID
app.put("/recipes/difficulty/:id", async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      {
        difficulty: req.body.difficulty,
      },
      {
        new: true,
      }
    );

    if (!updatedRecipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json({
      message: "Difficulty Updated",
      recipe: updatedRecipe,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
// 11. Update Prep Time & Cook Time By Title



app.put("/recipes/title/:title", async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findOneAndUpdate(
      {
        title: req.params.title,
      },
      {
        prepTime: req.body.prepTime,
        cookTime: req.body.cookTime,
      },
      {
        new: true,
      }
    );

    if (!updatedRecipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json({
      message: "Recipe Updated",
      recipe: updatedRecipe,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// 12. Delete Recipe By ID

app.delete("/recipes/:id", async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(
      req.params.id
    );

    if (!deletedRecipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json({
      message: "Recipe Deleted Successfully",
      recipe: deletedRecipe,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});