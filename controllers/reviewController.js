import Review from "../models/reviewModel.js";

// Create a review
export const createReview = async (req, res) => {
  const { movie, rating, comment } = req.body;

  try {
    const review = new Review({
      movie,
      user: req.user.userId,
      rating,
      comment,
    });

    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all reviews for a movie
export const getReviewsByMovie = async (req, res) => {
  const { movieId } = req.params;

  try {
    const reviews = await Review.find({ movie: movieId }).populate("user movie");
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
