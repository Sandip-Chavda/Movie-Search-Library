import express from "express";

const router = express.Router();

const {
  addMovieToList,
  getMoviesFromList,
} = require("../controllers/movie.controller.js");

router.post("/add", addMovieToList);
router.get("/list/:type", getMoviesFromList);

module.exports = router;
