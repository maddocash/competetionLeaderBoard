const mongoose = require('mongoose');

const tournamentSchema = mongoose.Schema({
  players: {type: Array},
  matchCapacity: {type: Number, default: 2},
  name: {type: String, default: 'Tournament'},
  rounds: {type: Array, required: true}
});

module.exports = mongoose.model('Tournament', tournamentSchema);
