var express = require('express');
var router = express.Router();


const Tournament = require('../models/tournaments');
const Player = require('../models/players');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Tournament.find({},(err,tournaments) => {
    if(err){
      return res.json({error: err})
    }
    return res.json({message:'got tournaments',payload: tournaments});
  })
});

router.post('/', function(req, res, next) {
  Player.find({name: {$in: req.body.players}}, (err, players) => {
    const playerIds = players.map(p => p._id);
    const state = Array(req.body.numRows).fill(Array(playerIds.length).fill(0))
    const tournament = new Tournament({
      ...req.body,
      players: playerIds,
      state
    });
    console.log(state)
    console.log(tournament)
    console.log(req.body)
    tournament.save((err,tournament) => {
      if(err){
        return res.json({error: err})
      }
      return res.json({message:'saved tournament',payload: tournament});
    })
  })

});

router.patch('/:id', function(req, res, next) {
  const { state } = req.query;

  Tournament.findById(req.params.id, (err,tournament) => {
    if(err){
      return res.json({error: err})
    }
    tournament.state = state || tournament.state;

    tournament.save((err,tournament) => {
      if(err){
        return res.json({error: err})
      }
      return res.json({message:'saved tournament',payload: tournament});
    })
  })
});

router.delete('/:id', function(req,res,next){
  Tournament.findOneAndRemove({_id: req.params.id}, (err,tournament) => {
    if(err){
      return res.json({error: err})
    }
    return res.json({message:'deleted tournament'});
  })
})

module.exports = router;
