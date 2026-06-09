// 3

const mongoose = require("mongoose");

const socialPostSchema = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: true,
    },

    profileImage: String,

    caption: String,

    imageUrl: String,

    hashtags: [String],

    mentions: [String],

    likes: {
      type: Number,
      default: 0,
    },

    comments: {
      type: Number,
      default: 0,
    },

    shares: {
      type: Number,
      default: 0,
    },

    postDate: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("SocialPost", socialPostSchema);