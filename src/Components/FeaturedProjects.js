import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';



import seabird  from '../asset/Image/seabird.jpg';
import whale from '../asset/Image/whale-img-04.jpeg';
import history from '../asset/Image/history-img.jpeg';
import star from '../asset/Image/star-img.jpeg';


const useStyles = makeStyles((theme) => ({
  

  root:{
    width: '80%',
    height: '62%',
    overflow:'hidden',
    backgroundColor: 'red',
    transition: 'all ease-in-out 5s', 
    '&:hover':{
      overflow: 'visible',
     
    }
   
  },

  cardHeader: {
    fontSize: '10px',
    color: '#fff',
    fontStyle: 'italic'
  },


 text: {
  position: 'relative',
   textAlign: 'center',
   marginBottom: '-1em',
   color: '#00979d',
   fontFamily: 'Oswald, sans-serif',
   fontSize: '1.25em',
   letterSpacing: '0.16em',
   textTransform: 'uppercase'
 },

 imageList: {
   Width: '100%',
   margin: '4em'
 },

//  CardContent: {
//    display: 'none',
//  }


    
}));

const FeaturedProjects = () => {
  const classes = useStyles()
  

  return (
    <>
     <Container className={classes.container} height='auto'>
      <Box alignItem='center'>
        <Typography variant='5' component='h2' className={classes.text}>
     Featured Projects
        </Typography>
      </Box>
   
    <Grid 
            className={classes.imageList}
        container
        // maxWidth='sm'
        spacing={0}
        my={4}
        >
        
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>  
          <Card className={classes.root} >
           
           <img src={seabird} alt='' width='246px' height='250px' />
             <CardHeader  className={classes.cardHeader}
             title='SEABIRDWATCH'
             />
             <CardContent className={classes.CardContent}>
               <Typography variant='body2' color='textSecondary' component='p'>
                 NEW - Round Island petrels
               </Typography>
             </CardContent>
            </Card>
        </Grid>

        

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card className={classes.root}  width='100%' height='100%'>
           
           <img src={whale} alt=''  width='246px' height='250px' />
             <CardHeader  className={classes.cardHeader}
             title='BELUGA BITS'
             />
             <CardContent  className={classes.CardContent}>
               <Typography variant='body2' color='textSecondary' component='p'>
               Examine underwater photos of wild beluga whales and help us identify the age, sex, and group size. We also need keen eye to look for identifying marks to recognize beluga that return to this location year after year.
               </Typography>
             </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card className={classes.root}  width='100%' height='100%'>
           
           <img src={history} alt=''  width='246px' height='250px'  />
             <CardHeader  className={classes.cardHeader}
             title='DARK ENERGY EXPLORER' 
             />
             <CardContent className={classes.CardContent}>
               <Typography variant='body2' color='textSecondary' component='p'>
                 Identify distant galaxies to help measure dark energy when the just ~2-3 billion years old
               </Typography>
             </CardContent>
            </Card>
        </Grid>




        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Card className={classes.root}  width='100%' height='100%'>
          <img src={star} alt='' width='246px' height='250px' />
    <CardHeader className={classes.cardHeader}
      title='CLIMATE HISTORY AUSTRALIA' />
             <CardContent className={classes.CardContent}>
               <Typography variant='body2' color='textSecondary' component='p'>
                 Help create Australia's longest daily  weather records
               </Typography>
             </CardContent>
            </Card>
        </Grid>
         </Grid>
    </Container>
      
     </>
  )

}

export default FeaturedProjects;
