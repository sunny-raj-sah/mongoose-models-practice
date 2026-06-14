 const express = require("express");
const { initializeDatabase } = require("../db/db.connect.js");

const Book = require("../mongoose-models/models-BE11HW1/Book.js");

const app = express();

app.use(express.json());

initializeDatabase();

// Create Book
async function createBook(newBook) {
  try {
    const book = new Book(newBook);
    const savedBook = await book.save();

    return savedBook;
  } catch (error) {
    throw error;
  }
}

// Get All Books
async function readAllBooks() {
  try {
    const books = await Book.find();
    return books;
  } catch (error) {
    throw error;
  }
}

// Get Book By Title
async function readBookByTitle(bookTitle) {
  try {
    const book = await Book.findOne({ title: bookTitle });
    return book;
  } catch (error) {
    throw error;
  }
}

// Get Books By Author
async function readBooksByAuthor(authorName) {
  try {
    const books = await Book.find({ author: authorName });
    return books;
  } catch (error) {
    throw error;
  }
}

// Get Books By Genre
async function readBooksByGenre(genreName) {
  try {
    const books = await Book.find({
      genre: genreName,
    });

    return books;
  } catch (error) {
    throw error;
  }
}

// Get Books By Published Year
async function readBooksByPublishedYear(year) {
  try {
    const books = await Book.find({
      publishedYear: year,
    });

    return books;
  } catch (error) {
    throw error;
  }
}

// Update Book By Id
async function updateBook(bookId, dataToUpdate) {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      dataToUpdate,
      { new: true }
    );

    return updatedBook;
  } catch (error) {
    throw error;
  }
}

// Update Book By Title
async function updateBookByTitle(bookTitle, dataToUpdate) {
  try {
    const updatedBook = await Book.findOneAndUpdate(
      { title: bookTitle },
      dataToUpdate,
      { new: true }
    );

    return updatedBook;
  } catch (error) {
    throw error;
  }
}

// Delete Book
async function deleteBook(bookId) {
  try {
    const deletedBook = await Book.findByIdAndDelete(
      bookId
    );

    return deletedBook;
  } catch (error) {
    throw error;
  }
}

// 1 & 2. Create Book API||


app.post("/books", async (req, res) => {
  try {
    const savedBook = await createBook(req.body);

    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({
      error: "Failed to create book",
    });
  }
});

// 3. Get All Books

app.get("/books", async (req, res) => {
  try {
    const books = await readAllBooks();

    if (books.length !== 0) {
      res.json(books);
    } else {
      res.status(404).json({
        error: "No books found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch books",
    });
  }
});

// 4. Get Book By Title

app.get("/books/:title", async (req, res) => {
  try {
    const book = await readBookByTitle(
      req.params.title
    );

    if (book) {
      res.json(book);
    } else {
      res.status(404).json({
        error: "Book not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch book",
    });
  }
});

// 5. Get Books By Author
app.get("/books/author/:authorName", async (req, res) => {
  try {
    const books = await readBooksByAuthor(
      req.params.authorName
    );

    if (books.length !== 0) {
      res.json(books);
    } else {
      res.status(404).json({
        error: "No books found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch books",
    });
  }
});

// 6. Get Books By Genre

app.get("/books/genre/:genreName", async (req, res) => {
  try {
    const books = await readBooksByGenre(
      req.params.genreName
    );

    if (books.length !== 0) {
      res.json(books);
    } else {
      res.status(404).json({
        error: "No books found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch books",
    });
  }
});

// 7. Get Books Released In 2012
app.get("/books/year/:year", async (req, res) => {
  try {
    const books =
      await readBooksByPublishedYear(
        req.params.year
      );

    if (books.length !== 0) {
      res.json(books);
    } else {
      res.status(404).json({
        error: "No books found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch books",
    });
  }
});

// 8. Update Rating By Id
app.put("/books/:bookId", async (req, res) => {
  try {
    const updatedBook = await updateBook(
      req.params.bookId,
      req.body
    );

    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).json({
        error: "Book does not exist",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to update book",
    });
  }
});

// 9. Update By Title Using findOneAndUpdate

app.put(
  "/books/title/:bookTitle",
  async (req, res) => {
    try {
      const updatedBook =
        await updateBookByTitle(
          req.params.bookTitle,
          req.body
        );

      if (updatedBook) {
        res.json(updatedBook);
      } else {
        res.status(404).json({
          error: "Book does not exist",
        });
      }
    } catch (error) {
      res.status(500).json({
        error: "Failed to update book",
      });
    }
  }
);

// 10. Delete Book By Id
app.delete("/books/:bookId", async (req, res) => {
  try {
    const deletedBook = await deleteBook(
      req.params.bookId
    );

    if (deletedBook) {
      res.json({
        message:
          "Book deleted successfully",
      });
    } else {
      res.status(404).json({
        error: "Book not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete book",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});