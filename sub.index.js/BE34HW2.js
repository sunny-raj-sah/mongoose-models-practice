const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const movies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
  { id: 2, title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },
  { id: 3, title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 }
];

const items = [
  { id: 1, itemName: "Spoon", color: "Silver", quantity: 8 },
  { id: 2, itemName: "Fork", color: "Silver", quantity: 8 },
  { id: 3, itemName: "Plate", color: "Off-White", quantity: 6 }
];

// 1. Home Route
app.get("/", (req, res) => {
  res.send("Express server.");
});

// 2. Update Movie
app.post("/movies/:id", (req, res) => {
  const movieId = parseInt(req.params.id);
  const updatedMovieData = req.body;

  const movieToUpdate = movies.find(
    (movie) => movie.id === movieId
  );

  if (!movieToUpdate) {
    return res.status(404).json({
      error: "Movie not found",
    });
  }

  if (
    !updatedMovieData.title ||
    !updatedMovieData.director ||
    !updatedMovieData.year
  ) {
    return res.status(400).json({
      error: "Title, director and year are required",
    });
  }

  Object.assign(movieToUpdate, updatedMovieData);

  res.status(200).json({
    message: "Movie updated successfully",
    movie: movieToUpdate,
  });
});

// 3. Get All Movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// 4. Update Item
app.post("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItemData = req.body;

  const itemToUpdate = items.find(
    (item) => item.id === itemId
  );

  if (!itemToUpdate) {
    return res.status(404).json({
      error: "Item not found",
    });
  }

  if (
    !updatedItemData.itemName ||
    !updatedItemData.color ||
    !updatedItemData.quantity
  ) {
    return res.status(400).json({
      error: "Item name, color and quantity are required",
    });
  }

  Object.assign(itemToUpdate, updatedItemData);

  res.status(200).json({
    message: "Item updated successfully",
    item: itemToUpdate,
  });
});

// 5. Get All Items
app.get("/items", (req, res) => {
  res.json(items);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});