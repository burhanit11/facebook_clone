import express from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  login,
  logout,
  refreshToken,
  signup,
  updateAccountDetail,
  updateAvatar,
  updateCoverImage,
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
router.route("/change-current").put(verifyJWT, changeCurrentPassword);
router.route("/update-account-detail").put(verifyJWT, updateAccountDetail);
router
  .route("/update-avatar")
  .put(verifyJWT, upload.single("avatar"), updateAvatar);

router
  .route("/update-coverImage")
  .put(verifyJWT, upload.single("coverImage"), updateCoverImage);

router.route("/get-current-user").get(verifyJWT, getCurrentUser);

export default router;
