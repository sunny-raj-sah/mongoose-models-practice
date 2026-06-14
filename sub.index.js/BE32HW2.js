const express = require("express");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Pre-defined Movies Array
const movies = [
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
];

// Pre-defined Items Array
const items = [
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
];

// 1. Home Route
app.get("/", (req, res) => {
  res.send("Express server.");
});

// 2. POST /movies
app.post("/movies", (req, res) => {
  const { id, title, director, year } = req.body;

  if (!id || !title || !director || !year) {
    return res.status(400).json({
      message: "All movie fields are required.",
    });
  }

  const newMovie = {
    id,
    title,
    director,
    year,
  };

  movies.push(newMovie);

  res.status(201).json({
    message: "Movie added successfully.",
    movie: newMovie,
  });
});

// 3. GET /movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// 4. POST /items
app.post("/items", (req, res) => {
  const { id, itemName, color, quantity } = req.body;

  if (!id || !itemName || !color || !quantity) {
    return res.status(400).json({
      message: "All item fields are required.",
    });
  }

  const newItem = {
    id,
    itemName,
    color,
    quantity,
  };

  items.push(newItem);

  res.status(201).json({
    message: "Item added successfully.",
    item: newItem,
  });
});

// 5. GET /items
app.get("/items", (req, res) => {
  res.json(items);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});