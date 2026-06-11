const { initializeDatabase } = require("../db/db.connect");
 

const Movie=require("../mongoose-models/models-BE11CW/movie.model");
const { error } = require("console");

initializeDatabase ();

const newMovie={
title: "New Movie ",
releaseYear: 2026,
genre: ["Romance", "Drama"],
director: "Aditya R Chopra",
 actors: ["actors1", "actors2"],
 language: "Hindi",
 country: "India",
rating: 6.1,
plot: "A young man and woman fall in love on a Europe trip.",
awards: "IFA  Awards",
posterUrl: "https://example.com/poster1.jpg",
trailerUrl: "https://example.com/trailer1.mp4"
}

async function createMovie(newMovie){
    try{
             const movie=new Movie(newMovie);
             const savedMovie= await movie.save();
       console.log("New movie data:",savedMovie)
    }catch(erro){
     throw error
    }
}
// createMovie(newMovie);
//find a movie with a particular title

async function readMovieByTitle(movieTitle){
    try{
     const movie=await Movie.findOne({title:movieTitle})
     console.log(movie);
    }catch(error){
        throw error;
    }
}

// readMovieByTitle("Lagaan");


// to get all the movies from the database

async function readAllMovies(){
    try{
          const allMovies=await Movie.find();
          console.log(allMovies);
    }catch(error){
        throw error
    }
}

// readAllMovies();

//get movie by the Director name

async function readMovieByDirector(directorName){
    try{
        const movieByDrictor=await Movie.find({director:directorName})
        console.log(movieByDrictor);
    }catch(error){
        throw error;
    }
}

// readMovieByDirector("Ashutosh Gowariker");


// BE2.3_CW

async function updateMovie(movieId,dataToUpdate){
    try{
       const udatedMovie=await Movie.findByIdAndUpdate(movieId,dataToUpdate,{new:true})
    console.log(udatedMovie)
}catch(error){
        throw error;

    }
}
//  updateMovie('6a28d472b6789bf0f5caf209',{rating:4});

async function updateMovieDetail(movieTitle, dataToUpdate) {
  try {
    const updatedMovie = await Movie.findOneAndUpdate(
      { title: movieTitle },
      dataToUpdate,
      { returnDocument: "after" }
    );

    console.log(updatedMovie);
  } catch (error) {
    throw error;
  }
}

// updateMovieDetail("Lagaan", { releaseYear: 2026 });

//  BE2.4_CW

// find a movie by id and delete from the database

async function deleteMovie(movieId){
    try{
        const deleteMovie=await Movie.findByIdAndDelete(movieId);
    }catch(error){
        throw error;
    }
}

// deleteMovie('6a28d472b6789bf0f5caf209');

async function deleteMovieFromDb(movieTitle){
    try{
       
        const deleteMovie= await Movie.findOneAndDelete({title:movieTitle});

        console.log("deleted movie:",deleteMovie )
    }catch(error){
        throw error;
    }
}

deleteMovieFromDb("Kabhi Khushi Kabhie Gham")