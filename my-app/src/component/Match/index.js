import React, {Component} from 'react';
import Player from '../Player';
import Branch from '../Branch';

class Match extends Component {
  render () {
      return(
        <div style={{display:'inherit',justifyContent:'space-around'}}>
          <Branch />
          {this.props.players.filter(a => a != null ).map(a => <Player roundNumber={this.props.roundNumber} onWin={this.props.onWin} player={a} />)}
        </div>
      )
  }
}

export default Match;
