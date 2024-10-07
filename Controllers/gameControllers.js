import game from "../Models/gameSchema.js";

export const createNewGame = async (req, res) => {
  try {
    const { player1Name, player2Name, rounds, player1Score, player2Score } =
      req.body;

    const newGame = new game({
      player1Name,
      player2Name,
      rounds,
      player1Score,
      player2Score,
    });

    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllGames = async (req, res) => {
    try {
        const games = await game.find().sort({ createdAt: -1 });
        res.json(games);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};