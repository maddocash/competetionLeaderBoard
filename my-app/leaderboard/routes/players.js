var express = require('express');
var router = express.Router();

const Player = require('../models/players')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Player.find({},(err,players) => {
    if(err){
      return res.json({error: err})
    }
    return res.json({message:'got players',payload: players});
  })
});

router.post('/', function(req, res, next) {
  const player = new Player(req.body);
  player.save((err,player) => {
    if(err){
      return res.json({error: err})
    }
    return res.json({message:'saved player',payload: player});
  })
});
router.patch('/:id', function(req, res, next) {
  const {wins, plays, score} = req.query;

  Player.findById(req.params.id, (err,player) => {
    if(err){
      return res.json({error: err})
    }
    player.wins += wins || 0;
    player.plays += plays || 0;
    player.score += score || 0;

    player.save((err,player) => {
      if(err){
        return res.json({error: err})
      }
      return res.json({message:'saved player',payload: player});
    })
  })
});

router.delete('/:id', function(req,res,next){
  Player.findOneAndRemove({_id: req.params.id}, (err,player) => {
    if(err){
      return res.json({error: err})
    }
    return res.json({message:'deleted player'});
  })
})

module.exports = router;
