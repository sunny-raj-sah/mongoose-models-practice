const { initializeDatabase } = require("../db/db.connect.js");
const fs = require("fs");
const path = require("path");

const filename = path.join(
  __dirname,
  "../mongoose-models",
  "models-BE11HW1",
  "Book.json"
);

console.log(filename);

const Book = require("../mongoose-models/models-BE11HW1/Book.js");

initializeDatabase();

const jsonData = fs.readFileSync(filename, "utf-8");

const booksData = JSON.parse(jsonData);

async function seedData() {
  try {
    for (const bookData of booksData) {
      const newBook = new Book({
        title: bookData.title,
        author: bookData.author,
        publishedYear: bookData.publishedYear,
        genre: bookData.genre,
        language: bookData.language,
        country: bookData.country,
        rating: bookData.rating,
        summary: bookData.summary,
        coverImageUrl: bookData.coverImageUrl,
      });

      await newBook.save();

      console.log(`${newBook.title} saved`);
    }

    console.log("Books seeded successfully.");
  } catch (error) {
    console.log("Error seeding data:", error);
  }
}

seedData();