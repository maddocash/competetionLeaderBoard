import React from 'react';
import Match from '../Match';
import Branch from '../Branch';

const TournamentRow = (props) => (
  <div style={{display:'inherit'}}>
    {props.round.map((a, i) => {
      if(i%2 === 0){
        let players = [props.round[i]]
        if(i < props.round.length) {
          players = [...players, props.round[i+1]];
        }
        return <Match players={players} onWin={props.onWin} roundNumber={props.roundNumber}/>
      }
      return;
    }).filter(a => a)}

  </div>
)

export default TournamentRow;
