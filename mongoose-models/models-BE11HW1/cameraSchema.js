// 5
const mongoose = require("mongoose");

const cameraSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    description: String,

    price: {
      type: Number,
      required: true,
    },

    originalPrice: Number,

    discountPercentage: Number,

    rating: {
      type: Number,
      min: 0,
      max: 5,
    },

    ratingsCount: Number,

    reviewsCount: Number,

    effectivePixels: String,

    sensorType: String,

    wifiAvailable: {
      type: Boolean,
      default: false,
    },

    videoResolution: String,

    warranty: String,

    features: [String],

    stock: {
      type: Number,
      default: 0,
    },

    isAssured: {
      type: Boolean,
      default: false,
    },

    freeDelivery: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Camera", cameraSchema);