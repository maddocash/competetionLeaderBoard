import React, { Component } from 'react';
import './App.css';
import Form from '../Form';
import Tournament from '../Tournament';

//tournament:
// {…}
// __v:
// 0
// _id:
// "5a0b003f01f42263048cfb65"
// name:
// "hi"
// players:
// Array[3]
// 0:
// "5a09bfcc7916ff612029bd21"
// 1:
// "5a09d722b12d4e478047e337"
// 2:
// "5a09d728b12d4e478047e338"
// rounds:
// Array[3]
// 0:
// Array[1]
// 1:
// Array[2]
// 2:
// Array[4]


const indexMapper = (index) => Math.floor(index/2);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tournament : {}
    }
  }

  _onSubmit = (data) => {
    this.setState(prevState => ({tournament: data}))
  }

  _getRound = (number) => {
    const rounds = this.state.tournament.rounds;
    // const index = rounds.length - 1 - number;

    return rounds[number];
  }

  _onWin = (id, rnd) =>{
    let round = this._getRound(rnd);
    const index = round.indexOf(id);
    if (index > -1){
      console.log('in if statement');
      let newIndex = indexMapper(index);
      // this._getNextRound()[newIndex] = id;
      this.setState(prevState => {
        let nextRound = prevState.tournament.rounds[rnd + 1]
        console.log ({
          tournament: {
            ...prevState.tournament,
            rounds: [
              ...prevState.tournament.rounds.slice(0, rnd + 1),
              [...nextRound.slice(0, newIndex), id, ...nextRound.slice(newIndex + 1)],
              ...prevState.tournament.rounds.slice(rnd + 2)]
          }
        });
        return ({
          tournament: {
            ...prevState.tournament,
            rounds: [
              ...prevState.tournament.rounds.slice(0, rnd + 1),
              [...nextRound.slice(0, newIndex), id, ...nextRound.slice(newIndex + 1)],
              ...prevState.tournament.rounds.slice(rnd + 2)]
          }
        })
      })
    }
  }

  render() {

    return (

      <div>
        <Form onSubmit={this._onSubmit} />
        <Tournament tournament={this.state.tournament} onWin={this._onWin} />
      </div>
    );
  }
}

export default App;
