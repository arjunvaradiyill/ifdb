import mongoose from "mongoose";

const watchlistSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Watchlist = mongoose.model("Watchlist", watchlistSchema);

export default Watchlist;
