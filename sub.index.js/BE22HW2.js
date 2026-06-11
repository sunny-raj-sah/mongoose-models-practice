const { initializeDatabase } = require("../db/db.connect");

const Hotel = require("../mongoose-models/BE21HW2.model");

initializeDatabase();

// Create Hotel
async function createHotel(newHotel) {
  try {
    const hotel = new Hotel(newHotel);
    const savedHotel = await hotel.save();

    console.log("New Hotel Data:", savedHotel);
  } catch (error) {
    console.error("Error creating hotel:", error);
  }
}

// Read All Hotels
async function getAllHotels() {
  try {
    const hotels = await Hotel.find();

    console.log("All Hotels:");
    console.log(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
  }
}

// Read Hotel By Name
async function getHotelByName(hotelName) {
  try {
    const hotel = await Hotel.findOne({ name: hotelName });

    console.log("Hotel Details:");
    console.log(hotel);
  } catch (error) {
    console.error("Error fetching hotel:", error);
  }
}

// Read Hotels With Parking
async function getHotelsWithParking() {
  try {
    const hotels = await Hotel.find({
      isParkingAvailable: true,
    });

    console.log("Hotels With Parking:");
    console.log(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
  }
}

// Read Hotels With Restaurant
async function getHotelsWithRestaurant() {
  try {
    const hotels = await Hotel.find({
      isRestaurantAvailable: true,
    });

    console.log("Hotels With Restaurant:");
    console.log(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
  }
}

// Read Hotels By Category
async function getHotelsByCategory(categoryType) {
  try {
    const hotels = await Hotel.find({
      category: categoryType,
    });

    console.log(`Hotels in ${categoryType} category:`);
    console.log(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
  }
}

// Read Hotels By Price Range
async function getHotelsByPriceRange(priceRange) {
  try {
    const hotels = await Hotel.find({
      priceRange: priceRange,
    });

    console.log(`Hotels in ${priceRange} price range:`);
    console.log(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
  }
}

// Read Hotels By Rating
async function getHotelsByRating(ratingValue) {
  try {
    const hotels = await Hotel.find({
      rating: ratingValue,
    });

    console.log(`Hotels with ${ratingValue} rating:`);
    console.log(hotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
  }
}

// Read Hotel By Phone Number
async function getHotelByPhoneNumber(phoneNumber) {
  try {
    const hotel = await Hotel.findOne({
      phoneNumber: phoneNumber,
    });

    console.log("Hotel Details:");
    console.log(hotel);
  } catch (error) {
    console.error("Error fetching hotel:", error);
  }
}

// Hotel Data 1
const hotel1 = {
  name: "Lake View",
  category: ["Mid-Range"],
  location: "124 Main Street, Anytown",
  rating: 3.2,
  reviews: [],
  website: "https://lake-view-example.com",
  phoneNumber: "+1234555890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Boating"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: false,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: false,
  photos: [
    "https://example.com/hotel1-photo1.jpg",
    "https://example.com/hotel1-photo2.jpg",
  ],
};

// Hotel Data 2
const hotel2 = {
  name: "Sunset Resort",
  category: ["Resort"],
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: [
    "Room Service",
    "Horse riding",
    "Boating",
    "Kids Play Area",
    "Bar",
  ],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: [
    "https://example.com/hotel2-photo1.jpg",
    "https://example.com/hotel2-photo2.jpg",
  ],
};

// Function Calls (Run One at a Time)
// 1 and 2 
// createHotel(hotel1);
// createHotel(hotel2);

// 3

// getAllHotels();

// 4
// getHotelByName("Lake View");

// 5

// getHotelsWithParking();

// 6
// getHotelsWithRestaurant();

// 7

// getHotelsByCategory("Mid-Range");

// 8

// getHotelsByPriceRange("$$$$ (61+)");
// 9

// getHotelsByRating(4.0);
// 10


// getHotelByPhoneNumber("+1299655890");