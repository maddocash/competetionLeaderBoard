import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TournamentRow from '../TournamentRow';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'stretch'
  }
}

class Tournament extends Component {

  _getWinners(round) {
      const {tournament} = this.props;
      if(round === tournament.rounds.length-1) {
        return tournament.rounds[round];
      }
      return tournament.rounds[round+1];
  }

  render () {
    const {tournament, onWin} = this.props;
    return (
      <div style={styles.container}>
        {tournament.rounds
          && tournament.rounds
          .map((round, ind) => <TournamentRow
            key={ind}
            round={round}
            roundNumber={ind}
            matchCapacity={tournament.matchCapacity}
            data={tournament.players}
            onWin={onWin}
            winners={this._getWinners(ind)}
          />)
          .reverse()}
      </div>
    );
  }
}

Tournament.propTypes = {
  tournament: PropTypes.shape({
    rounds: PropTypes.arrayOf(PropTypes.array)
  }),
  onWin: PropTypes.func
};

export default Tournament;
