import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from  '@material-ui/core/Box';

import video from '../asset/Video/home-video.mp4';




const useStyles = makeStyles(theme => ({ 
   video:  {
    width: '100%',
    height: '80vh',
    objectFit: 'cover',
    maxWidth: '100%'
    },

  homeBanner: {
  position: 'relative',
  textAlign: 'center',
  top: '-250px',
 },

 main_kicker: {
   fontSize: '1.5em',
   color: '#addde0',
   letterSpacing: '0.18em',
   textTransform: 'upperCase'
 },

 main_headline: {
   color: '#fff',
   fontSize: '3em',
   fontWeight: '700'
 },

 btn: {
   background: 'transparent',
   border: '1px solid #cc9200',
   color: '#fff',
   fontSize:'0.8em',
   margin: '0.75em 1em 0.75em 0',
   padding: '0.75em 0.75em',
   '&:hover': {
     backgroundColor: '#cc9200',
     color: '#fff',
     boxShadow:'none'
   },
   width: '150px',
 }

}));



 const HomeBanner = () => {
   const classes = useStyles();

   return (

     <div>
       <video  autoPlay loop muted className={classes.video}>
         <source src={video} type="video/mp4" />
      </video>
         <Box className={classes.homeBanner} >
                <Box className={classes.main_kicker}>Welcome to the Zooniverse </Box>
                <Box className={classes.main_headline}>People-powered research </Box>
                <Button className={classes.btn}>See all Projects </Button>
         </Box>
      
     </div>

   )}

export default HomeBanner;