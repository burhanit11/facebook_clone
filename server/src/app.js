import express from "express";
import cookieParser from "cookie-parser";
import usersRouter from "./routes/users.routes.js";

const app = express();

// middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// api
app.use("/api/v1/users", usersRouter);

export default app;
