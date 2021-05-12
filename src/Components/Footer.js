import React from 'react';
import {FaTwitter } from 'react-icons/fa';
import {FaFacebookF } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';
import { FaEllipsisV  } from 'react-icons/fa';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  flexBox: {
    
    height: 'auto',
    display: 'flex',
    background: '#404040',
    color: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    
  },

  centerBox: {
    width: '100%',
    margin: '5em auto',
    
  },
  footerLogo: {
  margin: '1.5em 2em'
  },

  footerMedia: {
    margin: '1.5em 2em 1em',
  },

  footerLinks: {
    margin:'1.5em 2em 1em'
  },

  footerChild: {
    height: 'auto',
    background: '#272727', 
    maxWidth: '100%',
   
  },

  footerText: {
    padding: '0.35em',
    fontSize: '0.9rem'
  },

  faIconText: {
      padding: '0.4em',
      fontSize: '0.7rem'
    },

  footerExtra: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '0.3em',
    margin: 'auto',
    padding: '2em 0',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.5)'
  },

  faIcon: {
    fontSize: '0.8rem',
    padding: '0.5',
    marginTop: '0.6em'
  },

  faIcon1: {
    fontSize: '1rem',
     margin: '0.6em'
  }
  
})

const Footer = () => {
  const classes = useStyles()  

  return (
    <div>
   
    <Grid className={classes.centerBox}>
    <Box className={classes.flexBox}>
    <Grid className={classes.footerLogo} item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Typography>
          ZOONIVERSE
          </Typography>
        </Grid>
        
        <Grid className={classes.footerLinks} item xs={3} sm={3} md={3} lg={3} xl={3}>
            <Typography className={classes.footerText}>Projects</Typography>
            <Typography className={classes.footerText}>Collections</Typography>
            <Typography className={classes.footerText}>Build a Project</Typography>
            <Typography className={classes.footerText}> to Build</Typography>
            <Typography className={classes.footerText}>Project Policies</Typography>
            <Typography className={classes.footerText}>FAQ</Typography>
          </Grid>

          <Grid className={classes.footerLinks} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <Typography className={classes.footerText}>About Us</Typography>
              <Typography className={classes.footerText}>Education</Typography>
              <Typography className={classes.footerText}>Our Team</Typography>
              <Typography className={classes.footerText}>Publications</Typography>
              <Typography className={classes.footerText}>Acknowledgements</Typography> 
              <Typography className={classes.footerText}>Contacts Us</Typography>
          </Grid>

          <Grid className={classes.footerLinks} item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Typography className={classes.footerText}>Zooniverse Talk</Typography>
          <Typography className={classes.footerText}>Daily Zooniverse</Typography>
          <Typography className={classes.footerText}>Blog</Typography>
          </Grid>

          <Grid className={classes.footerMedia}item xs={12} sm={6} md={4} lg={3} xl={3}>
            
             
            <FaFacebookF  className={classes.faIcon1} />
            <FaTwitter  className={classes.faIcon1} />
            <FaGooglePlusG  className={classes.faIcon1} />
            
          </Grid>
           </Box>
         
           <Box className={classes.footerChild}>
            <Grid className={classes.footerExtra}>
            <Typography className={classes.faIconText} > Privacy Policy</Typography>
              <FaEllipsisV  className={classes.faIcon} />
              <Typography className={classes.faIconText}>Jobs</Typography> 
              <FaEllipsisV  className={classes.faIcon} />
            <Typography className={classes.faIconText}>System Status</Typography>
              <FaEllipsisV  className={classes.faIcon} />
            <Typography className={classes.faIconText}>Security</Typography>
            </Grid>
          </Box>
       </Grid>
       
     </div>
  )
}

export default Footer;
