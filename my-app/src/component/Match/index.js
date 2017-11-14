import React, {Component} from 'react';
import Player from 'Player';
import Branch from 'Branch';

class Match extends Component {
  render () {
      return(
        <div>
          <Branch />
          <Player />
          <Player />
        </div>
      )
  }
}

export default Match;
