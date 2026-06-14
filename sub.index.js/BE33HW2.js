const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

// Pre-defined Movies Array
let movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
  },
];

// Pre-defined Items Array
let items = [
  {
    id: 1,
    itemName: "Spoon",
    color: "Silver",
    quantity: 8,
  },
  {
    id: 2,
    itemName: "Fork",
    color: "Silver",
    quantity: 8,
  },
  {
    id: 3,
    itemName: "Plate",
    color: "Off-White",
    quantity: 6,
  },
];

// 1. Home Route
app.get("/", (req, res) => {
  res.send("Hello, Express server.");
});

// 2. DELETE Movie with id 5
app.delete("/movies/5", (req, res) => {
  const movie = movies.find((movie) => movie.id === 5);

  if (!movie) {
    return res.status(404).json({
      message: "Movie not found.",
    });
  }

  movies = movies.filter((movie) => movie.id !== 5);

  res.status(200).json({
    message: "Movie deleted successfully.",
  });
});

// 3. GET Movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// 4. DELETE Item with id 2
app.delete("/items/2", (req, res) => {
  const item = items.find((item) => item.id === 2);

  if (!item) {
    return res.status(404).json({
      message: "Item not found.",
    });
  }

  items = items.filter((item) => item.id !== 2);

  res.status(200).json({
    message: "Item deleted successfully.",
  });
});

// 5. GET Items
app.get("/items", (req, res) => {
  res.json(items);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});