import React from 'react'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar';
import { blue200, red500, green500,yellowA200 } from 'material-ui/styles/colors'

const Player = (props) => {

  const cardStyle = {
    width: '10vw',
    height: '25vh',
    paddingTop: '2vh',
    backgroundColor: blue200
  }



  const backgroundStyle = {
    backgroundColor: !props.winner ? red500 : blue200
  }


  const avStyle = {
    width: '70%',
    height: '70%'
  }
  return (

    <div onClick={() => props.onWin(props.player,props.roundNumber)}>

    <Card style={{...cardStyle,...backgroundStyle}}>
    <Avatar
      src={props.avatar||"avatar.png"}
      style={avStyle}
    />

    <CardTitle title={props.player} titleStyle={{fontSize: '13px',color: "white", fontWeight: "bold"}} />

    <CardActions>

    </CardActions>
  </Card>
</div>
  )
}

export default Player
