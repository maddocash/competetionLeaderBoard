import React, {Component} from 'react';
import Player from '../Player';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'flex-start'
  },
  player: {
    flex: '0 1 auto'
  }
}

class Match extends Component {
  render () {
    const {
      players,
      roundNumber,
      onWin,
      data,
      winners
    } = this.props;
    return(
      <div style={styles.container}>
        {players
          .filter(a => a != null )
          .map((player, index) => {
            const playerData = data.byId[player];
            return (<Player
              key={index}
              style={styles.player}
              roundNumber={roundNumber}
              onWin={onWin}
              player={playerData}
              winner={winners.includes(player)}
            />)
          })}
      </div>
    )
  }
}

export default Match;
