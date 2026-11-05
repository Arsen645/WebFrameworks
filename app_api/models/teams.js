const mongoose = require('mongoose');

const honourSchema = new mongoose.Schema({
  competition: {
    type: String,
    required: true
  },
  titles: {
    type: Number,
    required: true,
    min: 0
  },
  lastWon: Number
});

const reviewSchema = new mongoose.Schema({
  author: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  reviewText: String,
  createdOn: {
    type: Date,
    'default': Date.now
  }
});

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  city: String,
  stadium: String,
  founded: Number,
  rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
  },
  titles: {
    type: Number,
    'default': 0,
    min: 0
  },
  description: String,
  coords: {
    type: [Number],
    index: '2dsphere'
  },
  honours: [honourSchema],
  reviews: [reviewSchema]
});

mongoose.model('Team', teamSchema);