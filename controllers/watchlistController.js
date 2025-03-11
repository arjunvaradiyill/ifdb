import Watchlist from "../models/watchlistModel.js";

// Add movie to watchlist
export const addToWatchlist = async (req, res) => {
  const { movieId } = req.body;

  try {
    const watchlist = await Watchlist.findOne({ user: req.user.userId });
    if (!watchlist) {
      const newWatchlist = new Watchlist({
        user: req.user.userId,
        movies: [movieId],
      });
      await newWatchlist.save();
      return res.status(201).json(newWatchlist);
    }

    // Add movie to existing watchlist
    if (watchlist.movies.includes(movieId)) {
      return res.status(400).json({ message: "Movie already in watchlist" });
    }

    watchlist.movies.push(movieId);
    await watchlist.save();
    res.status(200).json(watchlist);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get user watchlist
export const getWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.findOne({ user: req.user.userId }).populate("movies");
    if (!watchlist) {
      return res.status(404).json({ message: "Watchlist not found" });
    }
    res.json(watchlist);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
