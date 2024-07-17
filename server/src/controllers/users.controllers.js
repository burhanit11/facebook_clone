import { User } from "../models/users.models.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

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

    console.log(accessToken, refreshToken);

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

const refreshToken = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export { signup, login, logout, refreshToken };
