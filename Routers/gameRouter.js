import express from "express";
import { createNewGame, getAllGames } from "../Controllers/gameControllers.js";

const router = express.Router();

router.get('/',getAllGames)
router.post('/',createNewGame);

export default router;