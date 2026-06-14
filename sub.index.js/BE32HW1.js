const express = require("express");
require("dotenv").config();

const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Pre-defined Books Array
const books = [
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
];

// Pre-defined Todos Array
const todos = [
  {
    id: 1,
    title: "Water the plants",
    day: "Saturday",
  },
];

// 1. Home Route
app.get("/", (req, res) => {
  res.send("Hello, Express server.");
});

// 2. POST /books
app.post("/books", (req, res) => {
  const { id, title, author, year } = req.body;

  if (!id || !title || !author || !year) {
    return res.status(400).json({
      message: "All fields are required.",
    });
  }

  const newBook = {
    id,
    title,
    author,
    year,
  };

  books.push(newBook);

  res.status(201).json({
    message: "Book added successfully.",
    book: newBook,
  });
});

// 3. GET /books
app.get("/books", (req, res) => {
  res.json(books);
});

// 4. POST /todos
app.post("/todos", (req, res) => {
  const { id, title, day } = req.body;

  if (!id || !title || !day) {
    return res.status(400).json({
      message: "All fields are required.",
    });
  }

  const newTodo = {
    id,
    title,
    day,
  };

  todos.push(newTodo);

  res.status(201).json({
    message: "Todo added successfully.",
    todo: newTodo,
  });
});

// 5. GET /todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});