import express from "express";
import { createReview, getReviewsByMovie } from "../controllers/reviewController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a review (protected route)
router.post("/", protect, createReview);

// Get reviews for a specific movie
router.get("/:movieId", getReviewsByMovie);

export default router;
