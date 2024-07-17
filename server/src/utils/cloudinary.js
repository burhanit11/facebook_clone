import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
cloudinary.config({
  cloud_name: "dygkwfork",
  api_key: "176761614346139",
  api_secret: "XG5mWRKmQePI3W6kt5LXFgWzllE",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload file to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("upload file to cloudinary successfully");
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
  }
};

export default uploadOnCloudinary;
