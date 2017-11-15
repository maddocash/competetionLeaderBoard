import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Paper from 'material-ui/Paper';
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import UpArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import {grey200} from 'material-ui/styles/colors';

import './App.css';
import CreateForm from '../CreateForm';
import LoadForm from '../LoadForm';
import Tournament from '../Tournament';

const styles = {
  tournamentContainer: {
    padding: '10px',
    backgroundColor: grey200
  }
}

const indexMapper = (index) => Math.floor(index/2);
const playersArrayToState = (players) => (
  {
    byId: players.reduce((acc, cur) => {
      return {...acc, [cur._id]: cur}
    }, {}),
    allIds: players.map(player => player._id)
  }
)

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tournament : {},
      hideForm: false,
      done: false
    }
  }

  _onFormToggle = () => {
    this.setState(prevState => ({
      hideForm: !prevState.hideForm
    }))
  }

  _onSubmit = (data) => {
    this.setState(prevState => ({
      tournament: {
        ...data,
        players: playersArrayToState(data.players)
      },
      hideForm: true
    }));
  }

  _getRound = (number) => {
    const {rounds} = this.state.tournament;
    return rounds[number];
  }

  _onWin = (id, rnd) =>{
    if(this.state.done){
      return;
    }
    if(rnd >= (this.state.tournament.rounds.length - 1)) {
      return this.setState(prevState => ({
        done: true
      }))
    }
    let round = this._getRound(rnd);
    const index = round.indexOf(id);
    if (index > -1){
      let newIndex = indexMapper(index);
      this.setState(prevState => {
        let nextRound = prevState.tournament.rounds[rnd + 1];
        return ({
          tournament: {
            ...prevState.tournament,
            rounds: [
              ...prevState.tournament.rounds.slice(0, rnd + 1),
              [...nextRound.slice(0, newIndex), id, ...nextRound.slice(newIndex + 1)],
              ...prevState.tournament.rounds.slice(rnd + 2)]
          }
        });
      });
    }
  }

  render() {
    const {
      tournament,
      hideForm,
      done
    } = this.state;
    return (
      <div>
        {!hideForm && <Paper>
          <h3>Create a new tournament</h3>
          <CreateForm onSubmit={this._onSubmit} />
          <hr />
          <h3>Load an existing tournament</h3>
          <LoadForm onSubmit={this._onSubmit} />
        </Paper>}
        <FloatingActionButton onClick={this._onFormToggle}>
          {hideForm ? <DownArrow /> : <UpArrow />}
        </FloatingActionButton>
        <Paper style={styles.tournamentContainer}>
          <h1>{tournament.name}{done && ' is complete'}</h1>
          <Tournament tournament={tournament} onWin={this._onWin} />
        </Paper>
      </div>
    );
  }
}

export default App;
