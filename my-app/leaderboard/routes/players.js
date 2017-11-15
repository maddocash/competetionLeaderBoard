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

router.put('/', (req,res) =>{
  let keys = Object.keys(req.body);
  for(i = 0; i < keys.length; i++){
    Player.findOneAndUpdate({_id:req.body.keys[i]._id},req.body.keys[i],(err,doc)=>{
      if (err) {
        return res.json({error:err})
      }
      console.log(doc);
    })
    console.log('ooooooo');
  }
  res.json({message:'aaaaaahhhhhh!!'})
})


router.patch('/', function(req, res, next) {
  console.log(req.body);
  let keys = Object.keys(req.body);
  let MaxScore = Math.max.apply(null,Object.values({...req.body}));
  let array = [];

  for(var i = 0; i < keys.length; i++){
  Player.findById(keys[i],  (err,player) => {
    if(err){
      return res.json({error: err})
    }
    player.wins += MaxScore == Object.values(req.body)[i] ? 1 : 0;
    player.plays += 1;
    player.score += Number(req.body[keys[i]]) || 0;

    player.save((err,upPlayer) => {
      if(err){
        return res.json({error: err})
      }
      return;
    })
    return;
  })
}
return res.json({message:'updated player'});
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
