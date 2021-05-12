import React from 'react'
import researchers from '../asset/Image/home-researchers.jpg'
import researchers3 from '../asset/Image/home-researchers.jpg'
import researchers2 from  '../asset/Image/home-researchers.jpg'
import  { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    imageContainer: {
      display: 'flex',
      // width: '33.33%',
      maxWidth: '100%'
    },

    title: {
      textAlign: 'center',
      margin: '2.5em',
      color: '#5c5c5c',
    fontSize: '1em',
    fontWeight: '700',
    letterSpacing: '0.22em'
    },

    textBox: {
      maxWidth: '60%',
      margin: 'auto'
    },

    boldText: {
    textAlign: 'center',
    color: '#5c5c5c',
    fontSize: '2.2em',
    fontWeight: '700',
    lineHeight: '1.2em',
    margin: '1em'

    },

    zooBtn: {
     background: '#cc9200',
     border: '1px solid #cc9200',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.8em',
    margin: '0.75em auto 0.75em ',
    padding: '0.75em 0.75em',
    textDecoration: 'none',
    width: '150px'
    }
}));


const Researchers = () => {
  const classes = useStyles();

  return (
    <div>
  <Grid xs={12} sm={12} md={12} lg={4}>
    <Box className={classes.imageContainer}>
     <img src={researchers} alt='real researchers' width='100%'/>
     <img src={researchers2} alt='real researchers'  width='100%'/>
     <img src={researchers3} alt='real researchers'  width='100%'/>
     </Box>
   </Grid>

     <Box className={classes.textBox}>
     <h5 className={classes.title}>REAL RESEARCHERS, REAL RESULTS</h5>
     <p className={classes.boldText}>Meet the researchers who've created projects for free on the Zooniverse</p> 
     <p><span>Meet the researchers who’ve created projects for free on the Zooniverse</span> From classifying animals in the Serengeti to discovering new exoplanets using the Kepler space telescope, researchers of all backgrounds have used the free project builder to create engaging, accessible citizen science projects. Our researchers have used the data from their projects to publish over 100 peer-reviewed publications that encourage many fascinating discoveries. Researchers take part in project creation, data analysis, and even communicate directly with volunteers through Zooniverse Talk.</p>

     <Button className={classes.zooBtn}>Zooniverse Labs</Button>
    </Box>
    </div>
  )
}

export default Researchers;
