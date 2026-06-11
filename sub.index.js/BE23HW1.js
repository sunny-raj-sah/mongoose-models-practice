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
 
// Function Calls (Run One at a Time)
 


// createRestaurant(restaurant1);
 

// 1. Update Restaurant by ID

async function updateRestaurantById(restaurantId, dataToUpdate) {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      restaurantId,
      dataToUpdate,
      { returnDocument: "after" }
    );

    console.log("Updated Restaurant:");
    console.log(updatedRestaurant);
  } catch (error) {
    console.error("Error updating restaurant:", error);
  }
}


// 2. Update Restaurant by Name

async function updateRestaurantByName(restaurantName, dataToUpdate) {
  try {
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      { name: restaurantName },
      dataToUpdate,
      { returnDocument: "after" }
    );

    console.log("Updated Restaurant:");
    console.log(updatedRestaurant);
  } catch (error) {
    console.error("Error updating restaurant:", error);
  }
}


// 3. Update Restaurant by Phone Number

async function updateRestaurantByPhoneNumber(
  phoneNumber,
  dataToUpdate
) {
  try {
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      { phoneNumber: phoneNumber },
      dataToUpdate,
      { returnDocument: "after" }
    );

    console.log("Updated Restaurant:");
    console.log(updatedRestaurant);
  } catch (error) {
    console.error("Error updating restaurant:", error);
  }
}


// Question 1
// updateRestaurantById(
//   "PASTE_YO_CHINA_ID_HERE",
//   { rating: 4.1 }
// );

// Question 2
// updateRestaurantByName(
//   "Somi",
//   { name: "Som Sarovar" }
// );

// Question 3
// updateRestaurantByPhoneNumber(
//   "+1288997392",
//   { isDeliveryAvailable: true }
// );