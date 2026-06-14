const express = require("express");
const { initializeDatabase } = require("../db/db.connect.js");

 const Restaurant = require("../mongoose-models/BE21HW1.model");

const app = express();

app.use(express.json());

initializeDatabase();


async function createRestaurant(newRestaurant) {
  try {
    const restaurant = new Restaurant(newRestaurant);

    const savedRestaurant = await restaurant.save();

    return savedRestaurant;
  } catch (error) {
    throw error;
  }
}

app.post("/restaurants", async (req, res) => {
  try {
    const savedRestaurant = await createRestaurant(req.body);

    res.status(201).json({
      message: "Restaurant added successfully.",
      restaurant: savedRestaurant,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to add restaurant.",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});