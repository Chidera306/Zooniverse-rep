import React from "react";
import "./index.css";
import Header from './Components/Header'
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import GetInvolved from "./Pages/GetInvolved";
import Talk from "./Pages/Talk";
import BuildProject from "./Pages/BuildProject";
import News from "./Pages/News";
import About from "./Pages/About";

import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


// import Container from '@material-ui/core/Container'




const theme = createMuiTheme( {
  palette: {
   Primary: {
      main: '#000',
      
    },
    secondary: {
      light: '#fff',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles({});

const App = () => {
  const classes = useStyles();
  
  

   
  return (
    <ThemeProvider theme={theme}>
     
       <Header />
    <div className={classes.container}>
      
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/projects" render={props => <Projects {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        <Route exact path="/get-involved" render={props => <GetInvolved {...props} />} />
        <Route exact path="/talk" render={props => <Talk {...props} />} />
        <Route exact path="/build-project" render={props => <BuildProject {...props} />} />
        <Route exact path="/news" render={props => <News {...props} />} />

        <Route exact path="/sign-in" render={props => <BuildProject {...props} />} />
    
        <Route exact path="/zooniverseLogo" render={props => <Home {...props} />} />
       
      </Switch>
      
      </div>
      
      </ThemeProvider>
  );
}


export default App;