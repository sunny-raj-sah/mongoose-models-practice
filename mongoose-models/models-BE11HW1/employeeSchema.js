// 1

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: Number,
      required: true,
      unique: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    designation: String,

    photoUrl: String,

    dob: Date,

    email: String,

    phone: String,

    address: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);