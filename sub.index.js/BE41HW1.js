const { initializeDatabase } = require("../db/db.connect.js");
const express = require("express");
 initializeDatabase();

const app = express();

app.use(express.json());

 

 

/* Restaurant Schema */
const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  location: String,
  phoneNumber: String,
  rating: Number,
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

/* --------------------------------------------------
   API 1: Read All Restaurants
---------------------------------------------------*/
app.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();

    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch restaurants.",
    });
  }
});

/* --------------------------------------------------
   API 2: Read Restaurant By Name
---------------------------------------------------*/
app.get("/restaurants/:restaurantName", async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      name: req.params.restaurantName,
    });

    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant not found.",
      });
    }

    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch restaurant.",
    });
  }
});

/* --------------------------------------------------
   API 3: Read Restaurant By Phone Number
---------------------------------------------------*/
app.get("/restaurants/directory/:phoneNumber", async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      phoneNumber: req.params.phoneNumber,
    });

    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant not found.",
      });
    }

    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch restaurant.",
    });
  }
});

/* --------------------------------------------------
   API 4: Read Restaurants By Cuisine
---------------------------------------------------*/
app.get("/restaurants/cuisine/:cuisineName", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: req.params.cuisineName,
    });

    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch restaurants.",
    });
  }
});

/* --------------------------------------------------
   API 5: Read Restaurants By Location
---------------------------------------------------*/
app.get("/restaurants/location/:restaurantLocation", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      location: req.params.restaurantLocation,
    });

    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch restaurants.",
    });
  }
});

/* Server */
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});