// const { initializeDatabase } = require("./db/db.connect.js");
// const fs = require("fs");
// const path = require("path");

// const filename = path.join(
//   __dirname,
//   "mongoose-models",
//   "models-BE11CW",
//   "movies.json"
// );

// console.log(filename);

// const Movie = require("./mongoose-models/models-BE11CW/movie.model.js");

// initializeDatabase();

// const jsonData = fs.readFileSync(filename, "utf-8");
// // console.log(jsonData)
// const moviesData = JSON.parse(jsonData);
// // console.log(moviesData)
// function seedData() {
//   try {
//     for (const movieData of moviesData) {
//       const newMovie = new Movie({
//         title: movieData.title,
//         releaseYear: movieData.releaseYear,
//         genre: movieData.genre,
//         director: movieData.director,
//         actors: movieData.actors,
//         language: movieData.language,
//         country: movieData.country,
//         rating: movieData.rating,
//         plot: movieData.plot,
//         awards: movieData.awards,
//         posterUrl: movieData.posterUrl,
//         trailerUrl: movieData.trailerUrl,
//       });

//     //   console.log(newMovie.title);

//     newMovie.save();
//     }
//   } catch (error) {
//     console.log("Error seeding the data:", error);
//   }
// }

// seedData();

// -------------------------------------------------------------------------------------------------------

// require("./sub.index.js/BE12HW1.js");
// require("./sub.index.js/BE12HW2.js");
require("./sub.index.js/BE1Assignment.js");