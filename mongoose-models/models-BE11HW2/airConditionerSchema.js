// 1

const mongoose = require("mongoose");

const airConditionerSchema = new mongoose.Schema(
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

    modelNumber: String,

    description: String,

    price: {
      type: Number,
      required: true,
    },

    originalPrice: Number,

    discountPercentage: Number,

    rating: Number,

    ratingsCount: Number,

    reviewsCount: Number,

    tonnage: {
      type: Number,
      required: true,
    },

    starRating: {
      type: Number,
      required: true,
    },

    inverterTechnology: {
      type: Boolean,
      default: false,
    },

    copperCondenser: {
      type: Boolean,
      default: false,
    },

    wifiConnectivity: {
      type: Boolean,
      default: false,
    },

    warrantyProduct: String,

    warrantyCompressor: String,

    warrantyPCB: String,

    features: [String],

    availableOffers: [String],

    stock: {
      type: Number,
      default: 0,
    },

    isAssured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "AirConditioner",
  airConditionerSchema
);