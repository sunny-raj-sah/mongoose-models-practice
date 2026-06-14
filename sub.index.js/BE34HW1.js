 const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 }
];

const todos = [
  { id: 1, title: "Water the plants", day: "Saturday" },
  { id: 2, title: "Go for a walk", day: "Sunday" }
];

// 1. Home Route
app.get("/", (req, res) => {
  res.send("Hello, From Express Server.");
});

// 2. Update Book
app.post("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBookData = req.body;

  const bookToUpdate = books.find((book) => book.id === bookId);

  if (!bookToUpdate) {
    return res.status(404).json({
      error: "Book not found",
    });
  }

  if (
    !updatedBookData.title ||
    !updatedBookData.author ||
    !updatedBookData.year
  ) {
    return res.status(400).json({
      error: "Title, author and year are required",
    });
  }

  Object.assign(bookToUpdate, updatedBookData);

  res.status(200).json({
    message: "Book updated successfully",
    book: bookToUpdate,
  });
});

// 3. Get All Books
app.get("/books", (req, res) => {
  res.json(books);
});

// 4. Update Todo
app.post("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const updatedTodoData = req.body;

  const todoToUpdate = todos.find((todo) => todo.id === todoId);

  if (!todoToUpdate) {
    return res.status(404).json({
      error: "Todo does not exist",
    });
  }

  if (!updatedTodoData.title || !updatedTodoData.day) {
    return res.status(400).json({
      error: "Title and day are required",
    });
  }

  Object.assign(todoToUpdate, updatedTodoData);

  res.status(200).json({
    message: "Todo updated successfully",
    todo: todoToUpdate,
  });
});

// 5. Get All Todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});