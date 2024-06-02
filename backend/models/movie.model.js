import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  year: { type: Number, required: true },
  lists: {
    private: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    public: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
});

module.exports = mongoose.model("Movie", movieSchema);
