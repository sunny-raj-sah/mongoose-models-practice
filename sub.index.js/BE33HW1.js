const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

// Pre-defined Books Array
let books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
];

// Pre-defined Todos Array
let todos = [
  {
    id: 1,
    title: "Water the plants",
    day: "Saturday",
  },
  {
    id: 2,
    title: "Go for a walk",
    day: "Sunday",
  },
];

// 1. Home Route
app.get("/", (req, res) => {
  res.send("Hello, From Express Server.");
});

// 2. DELETE Book with id 1
app.delete("/books/1", (req, res) => {
  const book = books.find((book) => book.id === 1);

  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  books = books.filter((book) => book.id !== 1);

  res.status(200).json({
    message: "Book deleted successfully",
  });
});

// 3. GET Books
app.get("/books", (req, res) => {
  res.json(books);
});

// 4. DELETE Todo with id 4
app.delete("/todos/4", (req, res) => {
  const todo = todos.find((todo) => todo.id === 4);

  if (!todo) {
    return res.status(404).json({
      message: "Todo does not exist",
    });
  }

  todos = todos.filter((todo) => todo.id !== 4);

  res.status(200).json({
    message: "Todo deleted successfully",
  });
});

// 5. GET Todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});