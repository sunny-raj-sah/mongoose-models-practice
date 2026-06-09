// 3

const mongoose = require("mongoose");

const creditCardSchema = new mongoose.Schema(
  {
    cardHolderName: {
      type: String,
      required: true,
    },

    cardNumber: {
      type: String,
      required: true,
    },

    expiryDate: String,

    cardType: {
      type: String,
      enum: [
        "Visa",
        "MasterCard",
        "American Express",
        "RuPay",
        "Other",
      ],
    },

    bankName: String,

    cvv: String,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CreditCard", creditCardSchema);