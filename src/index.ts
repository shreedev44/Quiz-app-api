import express from "express";
import router from "./routers/router";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(err));

const allowedOrigins = [
  "http://localhost:3000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin as string)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/", router);

app.listen(5000, () => console.log("server running"));
