import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles({
  textCenter: {
    textAlign: 'center',
    margin: '50px'
    
  },

  number:{
    color: '#00979d',
    fontFamily: 'Oswald sans-serif',
    fontSize: '8em',
    fontWeight: 300,
    letterSpacing: '0.02em',
    lineHeight: '1.2em'
  },

  vibrant: {
    margin: '2em'
  },

  numberText: {
    margin: '1em',
    color: '#addde0',
    fontFamily: 'Oswald',
    fontSize: '1.5em',
    letterSpacing: '0.18em',
    textTransform: 'uppercase'
  },

  bold:{
    fontWeight: '700',
    color: '#000',
    fontSize: '1em'
  },

  btnBox: {
    display: 'flex',
    margin: '3em'
  },

  btnBox3: {
    background: 'transparent',
    color: '#000',
    '&:hover': {
      background:'#f0b200',
      color: '#000'
    },
    border: '1px solid #cc9200',
    cursor: 'pointer',
    fontSize: '0.8em',
    margin: '0.75em 1em 0.75em 0',
    padding: '0.75em 0.75em',
    textDecoration: 'none',
    width: '150px'

  },

  btnBox4: {
    background: '#f0b200',
    border: '1px solid #f0b200',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.8em',
    margin: '0.75em 1em 0.75em 0',
    padding: '0.75em 0.75em',
    textDecoration: 'none',
    width: '150px'
  }

});


const Works = () => {
  const classes = useStyles()
  return (
    <>
    <Grid className={classes.textCenter}>
      <Grid>
      <h4>THE ZOONIVERSE WORKS</h4>
      <Typography className={classes.number}>250,469,827</Typography>
      <Typography className={classes.numberText}>classifications so far by <br/>
      124,921 registered volunteers</Typography>
      </Grid>
      <Box className={classes.vibrant}>
        <Typography><span className={classes.bold}>A vibrant community.</span> Zooniverse gives people of all ages and backgrounds the <br/>chance to participate in real research with over 50 active online citizen science<br/> projects. Work with 1.6 million registered users around the world to contribute to research<br/> projects led by hundreds of researchers.</Typography>
      </Box>
      <Typography>SIGN IN OR REGISTER TO GET STARTED</Typography>
      <Box>
        <Button className= {classes.btnBox3}>Sign in</Button>
        <Button className={classes.btnBox4}>Register</Button>
      </Box>
    </Grid>
      
    </>
  )
}

export default Works
