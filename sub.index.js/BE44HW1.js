const express = require("express");
const { initializeDatabase } = require("../db/db.connect.js");

const Restaurant = require("../mongoose-models/BE21HW1.model");

const app = express();

app.use(express.json());

initializeDatabase();

async function updateRestaurant(restaurantId, dataToUpdate) {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      restaurantId,
      dataToUpdate,
      { new: true }
    );

    return updatedRestaurant;
  } catch (error) {
    throw error;
  }
}

app.put("/restaurants/:restaurantId", async (req, res) => {
  try {
    const updatedRestaurant = await updateRestaurant(
      req.params.restaurantId,
      req.body
    );

    if (updatedRestaurant) {
      res.status(200).json({
        message: "Restaurant updated successfully.",
        restaurant: updatedRestaurant,
      });
    } else {
      res.status(404).json({
        error: "Restaurant not found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to update restaurant.",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});