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




async function updateHotelById(hotelId, dataToUpdate) {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      hotelId,
      dataToUpdate,
      { returnDocument: "after" }
    );

    console.log("Updated Hotel:");
    console.log(updatedHotel);
  } catch (error) {
    console.error("Error updating hotel:", error);
  }
}


async function updateHotelByName(hotelName, dataToUpdate) {
  try {
    const updatedHotel = await Hotel.findOneAndUpdate(
      { name: hotelName },
      dataToUpdate,
      { returnDocument: "after" }
    );

    console.log("Updated Hotel:");
    console.log(updatedHotel);
  } catch (error) {
    console.error("Error updating hotel:", error);
  }
}

async function updateHotelByPhoneNumber(
  phoneNumber,
  dataToUpdate
) {
  try {
    const updatedHotel = await Hotel.findOneAndUpdate(
      { phoneNumber: phoneNumber },
      dataToUpdate,
      { returnDocument: "after" }
    );

    console.log("Updated Hotel:");
    console.log(updatedHotel);
  } catch (error) {
    console.error("Error updating hotel:", error);
  }
}


// Question 1
// updateHotelById(
//   "PASTE_LAKE_VIEW_ID_HERE",
//   { checkOutTime: "11:00 AM" }
// );

// Question 2
// updateHotelByName(
//   "Sunset Resort",
//   { rating: 4.2 }
// );

// Question 3
// updateHotelByPhoneNumber(
//   "+1299655890",
//   { phoneNumber: "+1997687392" }
// );