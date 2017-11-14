import React, { Component } from 'react';
import './App.css';
import Form from '../Form';
import Tournament from '../Tournament';

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
        <Tournament players={this.state} numRow={this.state.tournament.numRow}/>
      </div>
    );
  }
}

export default App;
