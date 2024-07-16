import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/connectDB.js";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is Running on Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
