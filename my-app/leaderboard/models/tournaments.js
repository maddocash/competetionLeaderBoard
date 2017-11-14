const mongoose = require('mongoose');

const tournamentSchema = mongoose.Schema({
  players: Array,
  name: String,
  rounds: Array
});

module.exports = mongoose.model('Tournament', tournamentSchema);
