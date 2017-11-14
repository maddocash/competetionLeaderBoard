import React, { Component } from 'react';
import './App.css';
import Form from '../Form';
import Match from '../Match';

import TournamentRow from '../TournamentRow';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tournament : []
    }
  }
  _onSubmit = (data) => {
    this.setState(prevState => ({tournament: data}))
  }
  render() {
    return (
      <div>
        <Form onSubmit={this._onSubmit} />
        <TournamentRow row={[1,2,3,4,5]} />
      </div>
    );
  }
}

export default App;
