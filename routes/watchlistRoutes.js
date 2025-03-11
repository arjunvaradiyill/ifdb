import express from "express";
import { addToWatchlist, getWatchlist } from "../controllers/watchlistController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add movie to watchlist (protected route)
router.post("/", protect, addToWatchlist);

// Get user's watchlist (protected route)
router.get("/", protect, getWatchlist);

export default router;
