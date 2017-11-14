const mongoose = require('mongoose');

const tournamentSchema = mongoose.Schema({
  players: Array,
  name: String,
  state: Array
});

module.exports = mongoose.model('Tournament', tournamentSchema);
