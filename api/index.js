import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};

// ----------------------------------------------------------------
// to run our app we sent it to port 8080

mongoose.connection.on("disconnectd", () => {
  console.log("mongodb disconnected");
});

mongoose.connection.on("disconnected", () => {
  console.log("mongodb connected");
});

// middlwares
app.use("api/users", usersRoute);
app.use("api/hotels", hotelsRoute);
app.use("api/rooms", roomsRoute);
app.use("api/auth", authRoute);



app.listen(8800, () => {
  connect();
  console.log("connected to backend");
});


