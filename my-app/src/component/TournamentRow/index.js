import React from 'react';
import PropTypes from 'prop-types';

import Match from '../Match';

const styles = {
  container: {
    flex: '0 1 auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignContent: 'stretch',
    alignItems: 'flex-start'
  },
  match: {
    flex: '0 1 auto'
  }
}
// ...rest = the rest of the props handed in(excluding round, matchCapacity), it is a short hand.
const TournamentRow = ({round, matchCapacity, ...rest}) => (
  <div style={styles.container}>
    {round && round.map((player, index) => {
      if(index % matchCapacity === 0) {
        return <Match
          key={index}
          style={styles.match}
          players={round.slice(index, index+matchCapacity)}
          {...rest}
        />;
      }
      return null;
    }).filter(a => a)}
  </div>
)

TournamentRow.propTypes = {
  round: PropTypes.array.isRequired,
  matchCapacity: PropTypes.number
}

TournamentRow.defaultProps = {
  round: []
}

export default TournamentRow;
