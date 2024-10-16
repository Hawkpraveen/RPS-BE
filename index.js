// server/server.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDb from "./Database/config.js";
import gameRouter from "./Routers/gameRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors(
  {
    origin:"*"
  }
));
app.use(express.json());

// Connect to MongoDB
connectDb();

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/games", gameRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
