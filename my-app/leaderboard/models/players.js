const mongoose = require('mongoose');

const playersSchema = mongoose.Schema({
  name: String,
  score: {type: Number, default: 0},
  plays: {type: Number, default: 0},
  wins: {type: Number, default: 0},
  avatar: String
});

module.exports = mongoose.model('Player', playersSchema);
