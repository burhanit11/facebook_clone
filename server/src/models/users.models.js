import mongoose, { Schema } from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    username: {
      type: "string",
      required: true,
      index: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
      trim: true,
    },
    avatar: {
      type: "string",
      required: true,
    },
    coverImage: {
      type: "string",
    },
    password: {
      type: "string",
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: "string",
    },
  },
  { timestamps: true }
);

// password bcryptjs
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return null;
  this.password = await bcryptjs.hash(this.password, 10);
  next();
});

// compare password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

// genrate access token
userSchema.methods.genrateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

// genrate refresh token
userSchema.methods.genrateRefreshToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
