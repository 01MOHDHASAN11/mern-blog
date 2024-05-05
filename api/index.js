import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoutes from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config()
const app = express();
app.use(express.json())

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(`Error connecting to database ${err}`);
  });

app.listen(3000, () => {
  console.log(`Server is running on PORT 3000`);
});


app.use('/api/user',userRoutes)
app.use('/api/auth',authRoute)