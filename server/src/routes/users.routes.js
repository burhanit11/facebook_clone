import express from "express";
import { signup } from "../controllers/users.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.route("/signup").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImg",
      maxCount: 1,
    },
  ]),
  signup
);

export default router;
