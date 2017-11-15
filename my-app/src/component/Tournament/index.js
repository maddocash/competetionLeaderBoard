import React from 'react';
import TournamentRow from '../TournamentRow';

const Tournament = (props) => (
  <div style={{display:'flex',justifyContent:'center', flexDirection:'column'}}>
    {props.tournament.rounds && props.tournament.rounds
      .map((a,i) => <TournamentRow
              key={i}
              round={a}
              roundNumber={i}
              onWin={props.onWin}
            />).reverse()}
  </div>
)

export default Tournament;
