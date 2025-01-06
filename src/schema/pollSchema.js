import mongoose from "mongoose";

const pollSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    options: [
      {
        option: {
          type: String,
          required: true,
        },
        votes: {
          type: Number,
          default: 0,
        },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to User model
      required: true,
    },
    voters: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User", // Reference to User model
        },
        votedOption: {
          type: String,
          required: true,
        },
      },
    ],
    expiryDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > Date.now(); // Ensure expiry date is in the future
        },
        message: "Expiry date must be in the future",
      },
    },
    expiryDate: {
      type: Date,
      required: false, // Make this field optional if desired
    },
  },
  { timestamps: true }
);

export const Poll = mongoose.model("Poll", pollSchema);
