import React from 'react'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar';
import { blue200 } from 'material-ui/styles/colors'

const Player = (props) => {

  const cardStyle = {
    width: '10vw',
    height: '25vh',
    paddingTop: '2vh',
    backgroundColor: blue200
  }
  const avStyle = {
    width: '70%',
    height: '70%'
  }
  return (
    <div onClick={props.onWin}>

    <Card style={cardStyle}>
    <Avatar
      src={props.avatar||"avatar.png"}
      style={avStyle}
    />

    <CardTitle title={props.name||"Player Name"} titleStyle={{fontSize: '13px',color: "white", fontWeight: "bold"}} />

    <CardActions>

    </CardActions>
  </Card>
</div>
  )
}

export default Player
