import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      tournamentName:'',
      playerNames: '',
      errorText: ''
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
        players: this.state.playerNames.split(',').map(a => a.trim())
      })
    })
    .then(res => res.json()).then(data => {
      if(data.error) {
        return this.setState(prevState => ({errorText: data.error}));
      }
      if(!data.payload) {
        return this.setState(prevState => ({errorText: 'Error creating that tournament'}));
      }
      this.props.onSubmit(data.payload);
    })
    .catch(err => {
      this.setState(prevState => ({errorText: err.error}))
    })
  }

  _onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render(){
    const {
      tournamentName,
      playerNames,
      errorText
    } = this.state
    return (
      <form onSubmit={this._onSubmit}>
        <TextField floatingLabelText="What's the tournament called?" name="tournamentName" onChange={this._onChange} value={tournamentName} type="text" />
        <TextField floatingLabelText="Who is playing?" name="playerNames" onChange={this._onChange} value={playerNames} type="text" />
        <RaisedButton primary={true} type="submit" label="Create" />
        <p style={{color: 'red'}}>{errorText}</p>
      </form>
    )
  };
}

export default Form;
