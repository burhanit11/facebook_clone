import { User } from "../models/users.models.js";
const signup = async (req, res) => {
  try {
    const { name, username, password, email } = req.body;

    console.log(name, username, password, email, "signup");

    if (
      [username, password, email, name].some((field) => field?.trim() === "")
    ) {
      res.status(403).json({ message: "All fields must be required" });
    }
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(403).json({ message: "user already exists." });
    }

    const localFilePathAvatar = req.fields?.avatar[0]?.path;
    const localFilePathCoverImg = req.fields?.coverImg[0]?.path;

    console.log(localFilePathAvatar, localFilePathCoverImg, "cover");

    res.status(200).json({ signup: "success" });
  } catch (error) {
    console.log(error);
  }
};

export { signup };
