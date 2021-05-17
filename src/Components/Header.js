import React from "react";
import { withRouter } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import Home from "../Pages/Home";



const useStyles = makeStyles(theme => ({
   root: {
    flexGrow: 1
  
   },
   menuButton: {
     marginRight: theme.spacing(2)
   },
   title: {
     [theme.breakpoints.down("xs")]: {
       flexGrow: 1
     }
   },

   

   IconButton: {
    backgroundColor: '#fff' 
   },

   
  headerOptions: {
     width: "100%",
     display: "flex",
     flex: 2,
    justifyContent: "space-between"

},


appBar: {
  backgroundColor:'#000'
},

navLinks: {
  color: '#fff',
  '&:hover': {
 cursor: 'pointer',
 borderBottom: '2px solid #00979d',
 letterSpacing: '0.15em',
 overFlowWrap: 'breakWord'
  }
}, 

zooniverseLogo: {
  color: '#00979d',
  cursor: 'pointer',
  '&:hover': {
    cursor: 'pointer',
    borderBottom: '2px solid #00979d',
  },
}

}));




const Header = props => {
  
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "ZOONIVERSE",
      pageURL: "/zooniverse"
    },
    {
      menuTitle: "PROJECTS",
      pageURL: "/projects"
    },
    {
      menuTitle: "ABOUT",
      pageURL: "/about"
    },
    {
      menuTitle: "GET INVOLVED",
      pageURL: "/get-involved"
    },
    {
      menuTitle: "TALK",
      pageURL: "/talk"
    },
    {
      menuTitle: "BUILD A PROJECT",
      pageURL: "/build-a-project"
    },
    {
      menuTitle: "DAILY ZOONIVERSE",
      pageURL: "/dailyzooniverse"
    },
    {
      menuTitle: "BLOG",
      pageURL: "/blog"
    }
   
  ];

 

  return (
 
    <div className={classes.root}>
      
      <AppBar position="static" className={classes.appBar} elevation={0} color="primary" >
        <Toolbar color="secondary">
          
          {/* <svg role="img" className={classes.zooniverseLogo} viewBox="0 0 100 100" width="1.8em" height="1.8em" ><g fill="currentColor" stroke="none" transform="translate(50, 50)"><path d="M 0 -45 A 45 45 0 0 1 0 45 A 45 45 0 0 1 0 -45 Z M 0 -30 A 30 30 0 0 0 0 30 A 30 30 0 0 0 0 -30 Z"></path><path d="M 0 -14 A 14 14 0 0 1 0 14 A 14 14 0 0 1 0 -14 Z"></path><ellipse cx="0" cy="0" rx="6" ry="65" transform="rotate(50)"></ellipse></g></svg> */}
            
          
         
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appBar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
          <div className={classes.headerOptions}>
            <Button 
            onClick={() => handleButtonClick("/")}>
            <svg role="img" className={classes.zooniverseLogo} viewBox="0 0 100 100" width="1.8em" height="1.8em" ><g fill="currentColor" stroke="none" transform="translate(50, 50)"><path d="M 0 -45 A 45 45 0 0 1 0 45 A 45 45 0 0 1 0 -45 Z M 0 -30 A 30 30 0 0 0 0 30 A 30 30 0 0 0 0 -30 Z"></path><path d="M 0 -14 A 14 14 0 0 1 0 14 A 14 14 0 0 1 0 -14 Z"></path><ellipse cx="0" cy="0" rx="6" ry="65" transform="rotate(50)"></ellipse></g></svg>
           </Button>

            <Button className={classes.navLinks}
             onClick={() => handleButtonClick("/projects")}>
             PROJECT
            </Button>

            <Button className={classes.navLinks}
            onClick={() => handleButtonClick("/about")}>
             ABOUT
            </Button>

             <Button className={classes.navLinks}
              onClick={() => handleButtonClick("/get-involved")}>
              GET INVOLVED
              </Button>

              <Button className={classes.navLinks}
              onClick={() => handleButtonClick("/talk")}>
              TALK
              </Button>

              <Button className={classes.navLinks}
               onClick={() => handleButtonClick("/build-project")}>
               BUILD A PROJECT
              </Button>

              <Button className={classes.navLinks}
               onClick={() => handleButtonClick("/news")}>
               NEWS
              </Button>
              
              <div>
                
              <Button className={classes.navLinks}
               onClick={() => handleButtonClick("/sign-in")}>
               SIGN IN
              </Button>

              <Button className={classes.navLinks}
               onClick={() => handleButtonClick("/register")}>
               REGISTER
              </Button>
              </div>
             
            </div>
          )}
       </Toolbar>
      </AppBar>
    </div>

);
};

export default withRouter(Header);
// export default Header;
