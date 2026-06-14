const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

let albums = [
  { id: 1, title: "Abbey Road", artist: "The Beatles", year: 1969 },
  { id: 2, title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973 },
  { id: 3, title: "Thriller", artist: "Michael Jackson", year: 1982 }
];

// 1. Home Route
app.get("/", (req, res) => {
  res.send("Hello, This is Express Assignment Server.");
});

// 2. Add New Album
app.post("/albums", (req, res) => {
  const newAlbum = req.body;

  if (
    !newAlbum.id ||
    !newAlbum.title ||
    !newAlbum.artist ||
    !newAlbum.year
  ) {
    return res.status(400).json({
      error: "Id, title, artist and year are required",
    });
  }

  albums.push(newAlbum);

  res.status(201).json({
    message: "Album added successfully",
    album: newAlbum,
  });
});

// 3. Get All Albums
app.get("/albums", (req, res) => {
  res.json(albums);
});

// 4. Delete Album with id 2
app.delete("/albums/:id", (req, res) => {
  const albumId = parseInt(req.params.id);

  const albumToDelete = albums.find(
    (album) => album.id === albumId
  );

  if (!albumToDelete) {
    return res.status(404).json({
      error: "Album not found",
    });
  }

  albums = albums.filter(
    (album) => album.id !== albumId
  );

  res.status(200).json({
    message: "Album deleted successfully",
  });
});

// 5. Update Album
app.post("/albums/update/:id", (req, res) => {
  const albumId = parseInt(req.params.id);
  const updatedAlbumData = req.body;

  const albumToUpdate = albums.find(
    (album) => album.id === albumId
  );

  if (!albumToUpdate) {
    return res.status(404).json({
      error: "Album does not exist",
    });
  }

  if (
    !updatedAlbumData.title ||
    !updatedAlbumData.artist ||
    !updatedAlbumData.year
  ) {
    return res.status(400).json({
      error: "Title, artist and year are required",
    });
  }

  Object.assign(albumToUpdate, updatedAlbumData);

  res.status(200).json({
    message: "Album updated successfully",
    album: albumToUpdate,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});