import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
// Register a new user
router.post("/signup", registerUser);

// Log in a user
router.post("/login", loginUser);

// Protected Routes
// Accessible by any authenticated user
router.get("/user", protect, (req, res) => {
  res.json({ message: "User Dashboard", user: req.user });
});

// Accessible only by admin users
router.get("/admin", protect, authorize("admin"), (req, res) => {
  res.json({ message: "Admin Dashboard", user: req.user });
});

export default router;
