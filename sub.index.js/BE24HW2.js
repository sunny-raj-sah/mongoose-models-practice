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
 
    

// Function Calls (Run One at a Time)
 
// createHotel(hotel1);


 

// Delete Hotel By ID
async function deleteHotelById(hotelId) {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(hotelId);

    if (deletedHotel) {
      console.log("Deleted Hotel:", deletedHotel);
    } else {
      console.log("Hotel not found.");
    }
  } catch (error) {
    console.error("Error deleting hotel by ID:", error);
  }
}

// Delete Hotel By Phone Number
async function deleteHotelByPhoneNumber(phoneNumber) {
  try {
    const deletedHotel = await Hotel.findOneAndDelete({
      phoneNumber: phoneNumber,
    });

    if (deletedHotel) {
      console.log("Deleted Hotel:", deletedHotel);
    } else {
      console.log("Hotel not found.");
    }
  } catch (error) {
    console.error("Error deleting hotel by phone number:", error);
  }
}

// Function Calls (Run One at a Time)

// Replace with an actual hotel _id from your database
// deleteHotelById("686f8d7f9c1b7c1234567890");

// Replace with an actual phone number from your database
// deleteHotelByPhoneNumber("+1234555890");