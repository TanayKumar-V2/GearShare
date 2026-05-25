import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

connectDb();

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
