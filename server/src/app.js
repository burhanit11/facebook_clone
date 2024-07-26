import express from "express";
import cookieParser from "cookie-parser";
import usersRouter from "./routes/users.routes.js";
import cors from "cors";

const app = express();

var corsOptions = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  origin: "http://localhost:3000/",
  Credential: true,
  optionsSuccessStatus: 200,
};

// middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// api
app.use("/api/v1/users", usersRouter);

export default app;
