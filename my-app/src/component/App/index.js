import React, { Component } from 'react';
import './App.css';
import Form from '../Form';
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Form onSubmit={this._onSubmit} />
        <TournamentRow row={[1,2,3,4,5]} />
      </div>
    );
  }
}

export default App;
