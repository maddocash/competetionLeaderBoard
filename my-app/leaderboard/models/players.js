const mongoose = require('mongoose');

const playersSchema = mongoose.Schema({
  name: {type: String, index: true, required: true, unique: true},
  score: {type: Number, default: 0, min: [0, 'Cannot have a negative score']},
  plays: {type: Number, default: 0, min: [0, 'Cannot have played less than 0 times']},
  wins: {type: Number, default: 0, min: [0, 'Cannot have a won less than 0 times']},
  avatar: {type: String, default: 'avatar.png'}
});

module.exports = mongoose.model('Player', playersSchema);
