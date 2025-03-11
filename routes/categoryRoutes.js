import express from "express";
import { createCategory, getCategories } from "../controllers/categoryController.js";

const router = express.Router();

// Route to create a category
router.post("/", createCategory);

// Route to get all categories
router.get("/", getCategories);

export default router;
