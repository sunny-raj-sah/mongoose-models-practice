// 10

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: String,

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    dueDate: Date,

    completed: {
      type: Boolean,
      default: false,
    },

    tags: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);