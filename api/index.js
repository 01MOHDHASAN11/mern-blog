import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoutes from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config()
const app = express();
app.use(express.json())
app.use(cookieParser())

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

app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500
  const message = err.message || 'Internal server error'
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})