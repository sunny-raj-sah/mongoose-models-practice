 
const express = require("express");
require("dotenv").config();

const app = express();

// Home Route
app.get("/", (req, res) => {
  res.send("Hello from express server.");
});

// Sign In Route
app.get("/signin", (req, res) => {
  res.send("This is the Sign In page.");
});

// Booking Route
app.get("/booking", (req, res) => {
  res.send("Book your tickets here.");
});

// Kids Clothing Route
app.get("/clothing/kids", (req, res) => {
  res.send("This is the kids wear page.");
});

// Blog Route
app.get("/blog", (req, res) => {
  res.send("This is the blog page.");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});