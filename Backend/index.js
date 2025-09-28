import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";



//load env variables
dotenv.config({ path: '../.env' });

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/auth", authRoutes);

//test routes
app.get("/", (req, res)=>{
  res.send("hello world");
});

const PORT = process.env.port || 5000;

//database connection
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
.then(()=>{
  console.log("Database connected successfully");
  app.listen( PORT, ()=>{
  console.log(`Server is running at port ${process.env.port}`)
});
})
.catch((err)=>{
  console.log(err , "MongoDB connection failed");
})

