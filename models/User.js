const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  storeName: {
    type: String,
  },
  pincode: {
    type: Number,
    required: true,
  },
  userReferralCode: {
    type: String,
  },

  referrer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  phoneOtp: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
  primeMember: {
    type: Boolean,
    default: false,
  },
  joinedPrimeDate: {
    type: Date,
  },
  remainingPrimeAmount: {
    type: Number,
  },
  primePaymentInfo: {
    orderCreationId: {
      type: String,
    },
    razorpayOrderId: {
      type: String,
    },
    razorpayPaymentId: {
      type: String,
    },
    razorpaySignature: {
      type: String,
    },
  },
});

module.exports = mongoose.model("User", userSchema);
