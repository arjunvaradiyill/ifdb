import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/authController.js'; // Import controller methods
import { protect, authorize } from '../middleware/authMiddleware.js'; // Import authentication middleware

const router = express.Router();

// ✅ Public Routes
router.post("/signup", registerUser); // User Registration
router.post("/login", loginUser); // User Login

// ✅ Protected User Dashboard (Only authenticated users can access)
router.get("/user", protect, (req, res) => {
  res.status(200).json({
    message: "User Dashboard",
    user: req.user
  });
});

// ✅ Protected Admin Dashboard (Only admins can access)
router.get("/admin", protect, authorize("admin"), (req, res) => {
  res.status(200).json({
    message: "Admin Dashboard",
    user: req.user
  });
});

// ✅ Logout Route (Clears Token from Client)
router.post("/logout", protect, logoutUser);

export default router;
