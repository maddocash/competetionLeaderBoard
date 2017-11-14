import React, {Component} from 'react'

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      tournamentName:'',
      numRows:0,
      playerNames: ''
    }
  }

  _onSubmit = (event) => {
    event.preventDefault();
    fetch('/tournaments', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.tournamentName,
        numRows: Number(this.state.numRows),
        players: this.state.playerNames.split(',').map(a => a.trim())
      })
    })
    .then(res => res.json())
    .then(data => this.props.onSubmit(data.payload))
  }

  _onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render(){
    const {
      tournamentName,
      numRows,
      playerNames
    } = this.state
    return (
      <form onSubmit={this._onSubmit}>
        <input name="tournamentName" onChange={this._onChange} value={tournamentName} type="text"></input>
        <input name="numRows" onChange={this._onChange} value={numRows} type="number"></input>
        <input name="playerNames" onChange={this._onChange} value={playerNames} type="text"></input>
        <input type="submit"></input>
      </form>
    )
  };
}

export default Form;
