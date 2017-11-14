import React, { Component } from 'react';
import './App.css';
import Form from '../Form';
import Match from '../Match';

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
      </div>
    );
  }
}

export default App;
