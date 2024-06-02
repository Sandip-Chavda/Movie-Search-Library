import User from "../models/user.model.js";
import Movie from "../models/movie.model.js";

exports.addMovieToList = async (req, res) => {
  const { movieId, userId, listType } = req.body; // listType: 'private' or 'public'

  try {
    const movie = await Movie.findById(movieId);
    const user = await User.findById(userId);

    if (listType === "private") {
      if (!movie.lists.private.includes(userId)) {
        movie.lists.private.push(userId);
        user.privateList.push(movieId);
      }
    } else if (listType === "public") {
      if (!movie.lists.public.includes(userId)) {
        movie.lists.public.push(userId);
        user.publicList.push(movieId);
      }
    }

    await movie.save();
    await user.save();

    res.status(200).json({ message: "Movie added to list successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add movie to list" });
  }
};

exports.getMoviesFromList = async (req, res) => {
  const { type } = req.params; // type: 'private' or 'public'
  const { userId } = req.query;

  try {
    let movies;
    if (type === "private") {
      movies = await Movie.find({ "lists.private": userId });
    } else if (type === "public") {
      movies = await Movie.find({ "lists.public": userId });
    }

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies from list" });
  }
};
