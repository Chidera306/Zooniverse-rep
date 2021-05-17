import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import apple  from '../asset/Image/apple-img.png';
import google from '../asset/Image/google-img.png';
import computer from '../asset/Image/home-computer.png';


const useStyles = makeStyles ({
  root: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#eef2f5',
    margin: '5em'
   },

   centerText: {
    marginTop: '3em',
    color: '#00979d',
    fontFamily: 'Oswald ',
    fontSize: '1em',
    letterSpacing: '0.16em',
    textTransform: 'upperCase'
},

header: {
  marginTop:  '1em',
  fontSize: '2rem',
},
   
zooText: {
  marginTop: '3em',
  fontWeight: 'bold'
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
    marginTop: '0.5em'
  },

  btnBox1: {
    backgroundColor: 'transparent',
    color: '#000',
    '&:hover': {
      background:'#cc9200',
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
    backgroundColor:'#f0b200',
    border: '1px solid #f0b200',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.8em',
    margin: '0.75em 1em 0.75em 0',
    padding: '0.75em 0.75em',
    textDecoration: 'none',
    width: '150px',
    '&:hover': {
      background: '#cc9200',
      color: '#fff'
     },
  },

  horizontalLine: {
    width: '100%',
    borderBottom: '1px solid #fff',
    marginTop: '1em'
  },

  header2: {
    fontSize: '0.8rem',
    marginTop: '2em'
  },

  scienceText: {
    marginTop: '1em'
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
          {/* <Box className={classes.textCenter}> */}
            <h3 className={classes.header}>Discover, teach, and learn</h3>
            <Typography className={classes.zooText}>The Zooniverse enables everyone to take part in real cutting edge research in many fields across the sciences, humanities, and more. The Zooniverse creates opportunities for you to unlock answers and contribute to real discoveries.</Typography>
         {/* </Box> */}

        <Box className={classes.btnBox}>
        <Button className={classes.btnBox1} >Sign in</Button>
        <Button className={classes.btnBox2}>Register</Button>
        </Box>

        <div className={classes.horizontalLine}></div>
        <Box>
          <h5 className={classes.header2}>DO SCIENCE, ANYWHERE</h5>
          <Typography className={classes.scienceText}>Bring the Zooniverse with you.Download the app for iOS and Android devices</Typography>
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
