import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      tournamentName:'',
      errorText: ''
    }
  }

  _onSubmit = (event) => {
    event.preventDefault();
    fetch(`/tournaments?name=${this.state.tournamentName}`)
    .then(res => res.json())
    .then(data => {
      if(data.error) {
        return this.setState(prevState => ({errorText: data.error}));
      }
      if(!data.payload || data.payload.length === 0) {
        return this.setState(prevState => ({errorText: 'Error finding that tournament'}));
      }
      this.props.onSubmit(data.payload[0])
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
      errorText
    } = this.state
    return (
      <form onSubmit={this._onSubmit}>
        <TextField floatingLabelText="What's the tournament called?" name="tournamentName" onChange={this._onChange} value={tournamentName} type="text" />
        <RaisedButton secondary={true} type="submit" label="Load" />
        <p style={{color: 'red'}}>{errorText}</p>
      </form>
    )
  };
}

export default Form;
