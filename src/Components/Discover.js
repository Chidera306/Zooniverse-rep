import React from 'react';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import apple  from '../asset/Image/apple-img.png';
import google from '../asset/Image/google-img.png';
import computer from '../asset/Image/home-computer.png';


const useStyles = makeStyles ({
  root: {
    backgroundColor: '#eef2f5',
    margin: '5em'
   },

   centerText: {
     marginBottom: '2em',
    color: '#00979d',
    fontFamily: 'Oswald ',
    fontSize: '1em',
    letterSpacing: '0.16em',
    textTransform: 'upperCase'
},
   
zooText: {
  margin: '2em'
},

  flexContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 'auto'
  },

  flexItem: {
    // width: '50%',
    justifyItems: 'center'
  },

  btnBox: {
    display: 'flex',
  },

  btnBox1: {
    backgroundColor: 'transparent',
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

  btnBox2: {
    backgroundColor: '#f0b200',
    border: '1px solid #f0b200',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.8em',
    margin: '0.75em 1em 0.75em 0',
    padding: '0.75em 0.75em',
    textDecoration: 'none',
    width: '150px'
  }
})

const Discover = () => {
  const classes = useStyles()
  return (

  <Grid container className={classes.root}>
    <Box className={classes.flexContainer}>
      <Box className={classes.flexItem}>
      <h5 className={classes.centerText}>What's this?</h5>
        {/* <Grid xs={12} md={12} lg={6}> */}
          <Box className={classes.textCenter}>
            <h3>Discover, teach, and learn</h3>
            <p className={classes.zooText}>The Zooniverse enables everyone to take part in real cutting edge research in many fields across the sciences, humanities, and more. The Zooniverse creates opportunities for you to unlock answers and contribute to real discoveries.</p>
         </Box>

        <Box className={classes.btnBox}>
        <Button className={classes.btnBox1} >Sign in</Button>
        <Button className={classes.btnBox2}>Register</Button>
        </Box>

        <Box>
          <h5>DO SCIENCE, ANYWHERE</h5>
          <p>Bring the Zooniverse with you.Download the app for iOS and Android devices</p>
        </Box>

        <Box>
          <img src={apple} alt="apple-device" width='100px'/>
          <img src={google} alt="google-device"width='100px' />
        </Box>

      </Box>
      <Box className={classes.flexItem}>
          <Box>
            <img src={computer} alt="home-computer" />
        </Box>
     </Box>
    {/* </Grid> */}
    </Box>
   </Grid>   

  );
}

export default Discover;
