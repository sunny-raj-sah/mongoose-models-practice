const { initializeDatabase } = require("../db/db.connect");

const Restaurant = require("../mongoose-models/BE21HW1.model");

initializeDatabase();


// Create Restaurant
async function createRestaurant(newRestaurant) {
  try {
    const restaurant = new Restaurant(newRestaurant);
    const savedRestaurant = await restaurant.save();

    console.log("New Restaurant Data:", savedRestaurant);
  } catch (error) {
    console.error("Error creating restaurant:", error);
  }
}

// Restaurant Data 1
const restaurant1 = {
  name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: [
    "https://example.com/somi-photo1.jpg",
    "https://example.com/somi-photo2.jpg",
  ],
};
 


// createRestaurant(restaurant1);

// Delete Restaurant By ID
async function deleteRestaurantById(restaurantId) {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(
      restaurantId
    );

    if (deletedRestaurant) {
      console.log("Deleted Restaurant:", deletedRestaurant);
    } else {
      console.log("Restaurant not found.");
    }
  } catch (error) {
    console.error("Error deleting restaurant by ID:", error);
  }
}

// Delete Restaurant By Name
async function deleteRestaurantByName(restaurantName) {
  try {
    const deletedRestaurant = await Restaurant.findOneAndDelete({
      name: restaurantName,
    });

    if (deletedRestaurant) {
      console.log("Deleted Restaurant:", deletedRestaurant);
    } else {
      console.log("Restaurant not found.");
    }
  } catch (error) {
    console.error("Error deleting restaurant by name:", error);
  }
}

// Call the functions

// Replace with an actual _id from your database
// deleteRestaurantById("686f8d7f9c1b7c1234567890");

// Replace with an actual restaurant name from your database
// deleteRestaurantByName("Somi");