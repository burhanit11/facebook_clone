import { User } from "../models/users.models.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";

// access and refresh token
const accessTokenAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.genrateAccessToken();
    const refreshToken = await user.genrateRefreshToken();

    user.refreshToken = refreshToken;

    user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log(error);
  }
};

// signup user
const signup = async (req, res) => {
  try {
    const { name, username, password, email } = req.body;

    if (
      [username, password, email, name].some((field) => field?.trim() === "")
    ) {
      res.status(403).json({ message: "All fields must be required" });
    }
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(403).json({ message: "user already exists." });
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if (!avatar) {
      res.status(403).json({ message: "Avatar file path is missing" });
    }

    const user = await User.create({
      name,
      email,
      username,
      password,
      avatar: avatar?.url,
      coverImage: coverImage?.url || "",
    });

    res.status(200).json({ signup: "success", user });
  } catch (error) {
    console.log(error);
  }
};

//  login user
const login = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if ([username, email, password].some((filed) => filed.trim() === "")) {
      return res.status(403).json({ message: "All fields are required" });
    }

    const userExists = await User.findOne({
      $or: [{ username }, { email }],
      //   email,
    });

    if (!userExists) {
      return res
        .status(403)
        .json({ message: "Invalid Emalil or Username and Password" });
    }

    const matchPassword = await userExists.isCorrectPassword(password);

    if (!matchPassword) {
      return res.status(403).json({ message: "Invalid credentials" });
    }

    const { accessToken, refreshToken } = await accessTokenAndRefreshToken(
      userExists._id
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    const loggedIn = await User.findById(userExists._id).select(
      "-password -refreshToken"
    );

    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        message: "Login successful",
        loggedIn,
        accessToken,
        refreshToken,
      });
  } catch (error) {
    console.log(error);
  }
};

// loggout user
const logout = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.user?._id,
      {
        $set: {
          refreshToken: undefined,
        },
      },
      {
        news: true,
      }
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    res
      .status(200)
      .cookie("accessToken", options)
      .cookie("refreshToken", options)
      .json({ message: "Logout successfully" });
  } catch (error) {
    console.log(error);
  }
};

// refresh access token
const refreshToken = async (req, res) => {
  const incomingRefreshToken =
    req.cookies?.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    return res.status(403).json({ message: "Unauthorized Requiest." });
  }
  console.log(incomingRefreshToken, "icomingToken");
  try {
    const decoded = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    console.log(decoded, "?????");
    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }
    if (incomingRefreshToken !== user.refreshToken) {
      return res
        .status(403)
        .json({ message: "Refresh token are expired or used" });
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, refreshToken } = await accessTokenAndRefreshToken(
      user._id
    );

    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({ message: "Access Token refreshed" });
  } catch (error) {
    console.log(error);
  }
};

// change current password

const changeCurrentPassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(req.user?._id);

    const matchPassword = await user.isCorrectPassword(oldPassword);

    if (!matchPassword) {
      res.status(402).json({ message: "Invalid password." });
    }

    user.password = newPassword;
    await user.save({ validateBeforeSave: false });

    res.status(200).json({ message: "Password change successfully." });
  } catch (error) {
    console.log(error);
  }
};

// update account details
const updateAccountDetail = async (req, res) => {
  const { name, email } = req.body;

  if (!email || !name) {
    res.status(402).json({ message: "All fields are requred" });
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        name,
        email,
      },
    },
    { new: true }
  ).select("-password");

  res.status(200).json({ message: "Account Update successfully", user });
};

// avatar is update
const updateAvatar = async (req, res) => {
  try {
    const avatarLocalPath = req.file.path;

    if (!avatarLocalPath) {
      res.status(403).json({ message: "Avatar Local Path are required." });
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);

    const user = await User.findByIdAndUpdate(
      req.user?._id,
      {
        $set: {
          avatar: avatar?.url,
        },
      },
      {
        new: true,
      }
    ).select("-password -refreshToken");

    res.status(200).json({ message: "Avatar is update successfully.", user });
  } catch (error) {
    console.log(error);
  }
};

// coverImage
const updateCoverImage = async (req, res) => {
  try {
    const coverImageLocalPath = req.file?.path;

    if (!coverImageLocalPath) {
      res.status(403).json({ message: "Cover Image Local Path are required." });
    }

    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    const user = await User.findByIdAndUpdate(
      req.user?._id,
      {
        $set: {
          coverImage: coverImage?.url,
        },
      },
      {
        new: true,
      }
    ).select("-password -refreshToken");

    res.status(200).json({ message: "Avatar is update successfully.", user });
  } catch (error) {
    console.log(error);
  }
};

// get currnt user
const getCurrentUser = async (req, res) => {
  try {
    const user = req.user;
    console.log(user, "user");
    res.status(200).json({ message: "current user fetch successfully.", user });
  } catch (error) {
    console.log(error);
  }
};

// get user channel
const getUserChannel = async (req, res) => {
  try {
    const { username } = req.params;

    if (!username) {
      return res.status(404).json({ message: "username is missing" });
    }

    const channel = User.aggregate([
      {
        $match: {
          username: username?.lowercase(),
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
};

export {
  signup,
  login,
  logout,
  refreshToken,
  changeCurrentPassword,
  updateAccountDetail,
  updateAvatar,
  updateCoverImage,
  getCurrentUser,
};
