// server/models/Game.js
import mongoose from "mongoose";

const roundSchema = new mongoose.Schema({
  roundNumber: Number,
  player1Choice: String,
  player2Choice: String,
  winner: String,
});

const gameSchema = new mongoose.Schema({
  player1Name: { type: String, required: true },
  player2Name: { type: String, required: true },
  rounds: [roundSchema],
  player1Score: { type: Number, default: 0 },
  player2Score: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export const game = mongoose.model("Game", gameSchema);
export default game;
