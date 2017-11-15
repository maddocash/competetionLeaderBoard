import React from 'react'
import {Card, CardTitle} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar';
import { blue200, red500, green300 } from 'material-ui/styles/colors'

const Player = ({onWin, winner, player = {}, roundNumber}) => {
  const styles = {
    card: {
      width: '10vw',
      height: '25vh',
      paddingTop: '2vh',
      backgroundColor: blue200
    },
    avatar: {
      width: '70%',
      height: '70%'
    },
    title: {
      fontSize: '13px',
      color: "white",
      fontWeight: "bold"
    }
  };
  const {
    _id = -1,
    avatar = "avatar.png",
    name = '...'
  } = player;
  if(_id !== -1) {
    styles.card = {
      ...styles.card,
      backgroundColor: !winner ? red500 : green300
    }
  }
  return (
    <div onClick={() => onWin(_id, roundNumber)}>
    <Card style={styles.card}>
    <Avatar
      src={avatar}
      style={styles.avatar}
    />
    <CardTitle title={name} titleStyle={styles.title} />
  </Card>
</div>
  )
}

export default Player;
