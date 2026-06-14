 const express = require("express");
const { initializeDatabase } = require("../db/db.connect.js");

const Hotel = require("../mongoose-models/BE21HW2.model");

const app = express();

app.use(express.json());

initializeDatabase();

async function createHotel(newHotel) {
  try {
    const hotel = new Hotel(newHotel);

    const savedHotel = await hotel.save();

    return savedHotel;
  } catch (error) {
    throw error;
  }
}

app.post("/hotels", async (req, res) => {
  try {
    const savedHotel = await createHotel(req.body);

    res.status(201).json({
      message: "Hotel added successfully.",
      hotel: savedHotel,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to add hotel.",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});