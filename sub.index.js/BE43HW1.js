const express = require("express");
const { initializeDatabase } = require("../db/db.connect.js");

const Restaurant = require("../mongoose-models/BE21HW1.model");

const app = express();

app.use(express.json());

initializeDatabase();

async function deleteRestaurant(restaurantId) {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(
      restaurantId
    );

    return deletedRestaurant;
  } catch (error) {
    throw error;
  }
}

app.delete("/restaurants/:restaurantId", async (req, res) => {
  try {
    const deletedRestaurant = await deleteRestaurant(
      req.params.restaurantId
    );

    if (deletedRestaurant) {
      res.status(200).json({
        message: "Restaurant deleted successfully.",
        restaurant: deletedRestaurant,
      });
    } else {
      res.status(404).json({
        error: "Restaurant not found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete restaurant.",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});