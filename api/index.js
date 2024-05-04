import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(`Error connecting to database ${err}`);
  });
const app = express();
app.listen(3000, () => {
  console.log(`Server is running on PORT 3000`);
});
