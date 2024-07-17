import jwt from "jsonwebtoken";
import { User } from "../models/users.models.js";

export const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies.accessToken ||
      req.header("authorization")?.replace("Brearer ", "");

    if (!token) {
      return res.status(404).json({ message: "Unauthorized Request." });
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      return res.status(404).json({ message: "Invalid Access token" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};
