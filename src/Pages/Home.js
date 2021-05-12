import React from "react";


import HomeBanner from '../Components/HomeBanner';
import FeaturedProjects from '../Components/FeaturedProjects';
import Discover from '../Components/Discover';
import Researchers from '../Components/Researchers';
import Footer from '../Components/Footer'
import Works from '../Components/Works';
// import Container from '@material-ui/core/Container'



const Home = props => {
  return (
    <div>
    
     <HomeBanner /> 
     <FeaturedProjects />
    
     
     <Discover />
     <Works />
     
     <Researchers />

     <Footer />
    </div>
  );
}

export default Home;
