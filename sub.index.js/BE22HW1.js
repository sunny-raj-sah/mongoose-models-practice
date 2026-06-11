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

// Read All Restaurants
async function getAllRestaurants() {
  try {
    const restaurants = await Restaurant.find();

    console.log("All Restaurants:");
    console.log(restaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
  }
}

// Read Restaurant By Name
async function getRestaurantByName(restaurantName) {
  try {
    const restaurant = await Restaurant.findOne({
      name: restaurantName,
    });

    console.log("Restaurant Details:");
    console.log(restaurant);
  } catch (error) {
    console.error("Error fetching restaurant:", error);
  }
}

// Read Restaurants Offering Reservations
async function getRestaurantsWithReservations() {
  try {
    const restaurants = await Restaurant.find({
      reservationsNeeded: true,
    });

    console.log("Restaurants Offering Reservations:");
    console.log(restaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
  }
}

// Read Restaurants Offering Delivery
async function getRestaurantsWithDelivery() {
  try {
    const restaurants = await Restaurant.find({
      isDeliveryAvailable: true,
    });

    console.log("Restaurants Offering Delivery:");
    console.log(restaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
  }
}

// Read Restaurant By Phone Number
async function getRestaurantByPhoneNumber(phoneNumber) {
  try {
    const restaurant = await Restaurant.findOne({
      phoneNumber: phoneNumber,
    });

    console.log("Restaurant Details:");
    console.log(restaurant);
  } catch (error) {
    console.error("Error fetching restaurant:", error);
  }
}

// Read Restaurants By Cuisine
async function getRestaurantsByCuisine(cuisineType) {
  try {
    const restaurants = await Restaurant.find({
      cuisine: cuisineType,
    });

    console.log(`Restaurants with ${cuisineType} cuisine:`);
    console.log(restaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
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

// Restaurant Data 2
const restaurant2 = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: [
    "https://example.com/yo-photo1.jpg",
    "https://example.com/yo-photo2.jpg",
    "https://example.com/yo-photo3.jpg",
  ],
};

// Function Calls (Run One at a Time)
// 1 and 2


// createRestaurant(restaurant1);
// createRestaurant(restaurant2);

// 3


// getAllRestaurants();

// 4

// getRestaurantByName("New Restaurant");
//  5

// getRestaurantsWithReservations();
// 6

// getRestaurantsWithDelivery();

// 7

// getRestaurantByPhoneNumber("+1288997392");
// 8

getRestaurantsByCuisine("Spanish");