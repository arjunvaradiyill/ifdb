import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
