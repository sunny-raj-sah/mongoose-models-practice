const express = require("express");
require("dotenv").config();

const app = express();

// Route 1
app.get("/", (req, res) => {
  res.send("Hello, Express JS");
});

// Route 2
app.get("/products", (req, res) => {
  res.send("Browse our products here.");
});

// Route 3
app.get("/services", (req, res) => {
  res.send("Explore our services.");
});

// Route 4
app.get("/faq", (req, res) => {
  res.send("Frequently Asked Questions.");
});

// Route 5
app.get("/gallery", (req, res) => {
  res.send("View our gallery.");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});