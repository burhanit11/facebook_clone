import express from "express";
import {
  login,
  logout,
  refreshToken,
  signup,
} from "../controllers/users.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/signup").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  signup
);

router.route("/login").post(login);
router.route("/logout").post(verifyJWT, logout);
router.route("/refresh-token").post(verifyJWT, refreshToken);

export default router;
