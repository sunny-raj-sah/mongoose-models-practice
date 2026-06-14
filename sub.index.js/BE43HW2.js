const express = require("express");
const { initializeDatabase } = require("../db/db.connect.js");

const Hotel = require("../mongoose-models/BE21HW2.model");

const app = express();

app.use(express.json());

initializeDatabase();

async function deleteHotel(hotelId) {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(hotelId);

    return deletedHotel;
  } catch (error) {
    throw error;
  }
}

app.delete("/hotels/:hotelId", async (req, res) => {
  try {
    const deletedHotel = await deleteHotel(
      req.params.hotelId
    );

    if (deletedHotel) {
      res.status(200).json({
        message: "Hotel deleted successfully.",
        hotel: deletedHotel,
      });
    } else {
      res.status(404).json({
        error: "Hotel not found.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete hotel.",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});