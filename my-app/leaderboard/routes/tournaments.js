var express = require('express');
var router = express.Router();

const Tournament = require('../models/tournaments');
const Player = require('../models/players');

const calculateNumRounds = (length, capacity) => Math.ceil(Math.log(length)/Math.log(capacity)) + 1;
const generateRounds = (numPlayers, capacity, fillWith = 0) => (
  Array.from(
    Array(
      calculateNumRounds(numPlayers, capacity)
    ).keys())
    .map(a => Array(capacity**a)
      .fill(fillWith)
    )
  )
/* GET users listing. */
router.get('/', function(req, res, next) {
  Tournament.find(req.query,(err,tournaments) => {
    if(err){
      return res.json({error: err})
    }
    return res.json({message:'got tournaments',payload: tournaments});
  })
});

router.post('/', function(req, res, next) {
  Player.find({name: {$in: req.body.players}}, (err, players) => {
    const matchCapacity = 2;
    const playerIds = players.map(p => p._id);
    let rounds = generateRounds(players.length, matchCapacity).reverse();
    rounds[0] = playerIds;
    const tournament = new Tournament({
      name: req.body.name || 'Tournament',
      players,
      rounds,
      matchCapacity
    });
    tournament.save((err,tournament) => {
      if(err){
        return res.json({error: err})
      }
      return res.json({message:'saved tournament',payload: tournament});
    })
  })

});

router.patch('/:id', function(req, res, next) {
  const { rounds } = req.query;

  Tournament.findById(req.params.id, (err,tournament) => {
    if(err){
      return res.json({error: err})
    }
    tournament.rounds = rounds || tournament.rounds;

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
