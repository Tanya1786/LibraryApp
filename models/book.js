const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  edition: String,
  format: String,
  num_pages: Number,
  rating: Number,
  rating_count: Number,
  review_count: Number,
  genres: String,
  genre_list: String,
  image_url: String,
  Quote1: String,
  Quote2: String,
  Quote3: String
});

module.exports = mongoose.model('Book', bookSchema);
