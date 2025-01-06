import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 6,
      validate: {
        validator: function (email) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        },
      },
      index: true, // Index for faster lookups
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    bookmark: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Poll",
      },
    ],
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", function (next) {
  const user = this;

  // Hash password only if it's modified
  if (!user.isModified("password")) return next();

  const SALT = bcrypt.genSaltSync(9);
  user.password = bcrypt.hashSync(user.password, SALT);
  next();
});

// Helper method for password comparison
userSchema.methods.comparePassword = function (plainPassword) {
  return bcrypt.compareSync(plainPassword, this.password);
};

export const User = mongoose.model("User", userSchema);
