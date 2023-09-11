const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnail: {
      type: String,
      required: true,
      trim: true,
    },
    track: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Song = mongoose.model("song", songSchema);

module.exports = Song;
