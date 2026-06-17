const express = require("express");
const { initializeDatabase } = require("../db/db.connect.js");

const Hotel = require("../mongoose-models/BE21HW2.model.js"); 

const app = express();


const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));




app.use(express.json());

initializeDatabase();

/* ==========================================
   1. Get All Hotels
========================================== */
app.get("/hotels", async (req, res) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch hotels.",
    });
  }
});

/* ==========================================
   2. Get Hotel By Name
========================================== */
app.get("/hotels/:hotelName", async (req, res) => {
  try {
    const hotel = await Hotel.findOne({
      name: req.params.hotelName,
    });

    if (!hotel) {
      return res.status(404).json({
        message: "Hotel not found.",
      });
    }

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch hotel.",
    });
  }
});

/* ==========================================
   3. Get Hotel By Phone Number
========================================== */
app.get("/hotels/directory/:phoneNumber", async (req, res) => {
  try {
    const hotel = await Hotel.findOne({
      phoneNumber: req.params.phoneNumber,
    });

    if (!hotel) {
      return res.status(404).json({
        message: "Hotel not found.",
      });
    }

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch hotel.",
    });
  }
});

/* ==========================================
   4. Get Hotels By Rating
========================================== */
app.get("/hotels/rating/:hotelRating", async (req, res) => {
  try {
    const hotels = await Hotel.find({
      rating: req.params.hotelRating,
    });

    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch hotels.",
    });
  }
});

/* ==========================================
   5. Get Hotels By Category
========================================== */
app.get("/hotels/category/:hotelCategory", async (req, res) => {
  try {
    const hotels = await Hotel.find({
      category: req.params.hotelCategory,
    });

    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch hotels.",
    });
  }
});

/* ==========================================
   Start Server
========================================== */
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});