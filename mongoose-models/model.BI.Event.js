const mongoose = require("mongoose");

const speakerSchema = new mongoose.Schema({
  name: String,
  designation: String,
  image: String,
});

const eventSchema = new mongoose.Schema({
  title: String,
  type: {
    type: String,
    enum: ["Online", "Offline"],
  },
  thumbnail: String,
  hostedBy: String,

  description: String,

  startTime: String,
  endTime: String,

  venue: String,
  address: String,

  price: Number,

  dressCode: String,
  ageRestrictions: String,

  tags: [String],

  speakers: [speakerSchema],
});

module.exports = mongoose.model(
  "Event",
  eventSchema
);