const express = require("express");
const { initializeDatabase } = require("../db/db.connect.js");

const Hotel = require("../mongoose-models/BE21HW2.model");

const app = express();

app.use(express.json());

initializeDatabase();

async function updateHotel(hotelId, dataToUpdate) {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      hotelId,
      dataToUpdate,
      { new: true }
    );

    return updatedHotel;
  } catch (error) {
    throw error;
  }
}

app.put("/hotels/:hotelId", async (req, res) => {
  try {
    const updatedHotel = await updateHotel(
      req.params.hotelId,
      req.body
    );

    if (updatedHotel) {
      res.status(200).json({
        message: "Hotel updated successfully.",
        hotel: updatedHotel,
      });
    } else {
      res.status(404).json({
        error: "Hotel not found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to update hotel.",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});