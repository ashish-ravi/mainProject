import React, {useState} from "react";
import {AppBar,Toolbar,Typography, Button, IconButton, makeStyles } from '@material-ui/core';
import {Link } from "react-router-dom";
import { useSelector } from "react-redux";





import MenuIcon from '@material-ui/icons/Menu';
import fire from "../../fire";

// npm install --save-dev @iconify/react @iconify-icons/logos
// npm install --save-dev @iconify/react @iconify-icons/logos
import { Icon, InlineIcon } from '@iconify/react';
import airbnbIcon from '@iconify-icons/logos/airbnb';




const NavBar = (props) => {

    const users = useSelector((state) => state.usrs);
    
    const [userName, setUserr] = useState([]);

    // setUser(users.displayName);
    console.log("this is navbar",users);
    console.log(users.displayName)
    console.log("this is actual",users.photoURL)

    const photolin = users.photoURL;
    console.log(photolin);


    const classes = useStyles();
    
    const logout = () => {
        fire.auth().signOut().then(() => {
            props.history.push("/")
        }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" style={{paddingTop: 10, paddingBottom: 10}}>
                <Toolbar style={{minHeight: 80}}>
                
                <Typography  style={{marginLeft: 120}} className={classes.title}>
                <Link to={"/home"} style={{ textDecoration: 'none',color:"red", fontSize: 30  }}><Icon icon={airbnbIcon} width="40" height="40"  /> <span style={{fontSize: 36,fontWeight: 700, marginLeft: 8}}>airbnb</span> Clone</Link>
                </Typography>
                
                <Link to={"/home"} style={{ textDecoration: 'none' }}>
                    <Button  color="" size="large" className={classes.space} style={{ borderRadius: 10, fontSize: 18, fontWeight: 500}}>
                        Home
                    </Button>
                </Link>
                <Link to={"/user"} style={{ textDecoration: 'none' }}>
                    <Button  color="" size="large" className={classes.space} style={{borderRadius: 10, fontSize: 18, fontWeight: 500}}>
                        Friends
                    </Button>
                </Link>
                <Link to={"/chat"} style={{ textDecoration: 'none' }}>
                    <Button color="" size="large" className={classes.space} style={{borderRadius: 10, fontSize: 18, fontWeight: 500}}>
                        Chat
                    </Button>
                </Link>
                <Link to={"/codecollab"} style={{ textDecoration: 'none' }}>
                    <Button color="" size="large" className={classes.space} style={{borderRadius: 10, fontSize: 18, fontWeight: 500}}>
                        CodeCollab
                    </Button>
                </Link>
                <Link to={"/weather"} style={{ textDecoration: 'none' }}>
                    <Button color="" size="large" className={classes.space} style={{borderRadius: 10, fontSize: 18, fontWeight: 500, }}>
                        Weather
                    </Button>
                </Link>
               
                <Button color="" size="large" onClick={logout} style={{borderRadius: 10, fontSize: 18, fontWeight: 600,  marginRight: 30}}><img src={photolin} style={{borderRadius: "50%", width: "50px", height:"50px", verticalAlign: "middle" }}></img> &nbsp;  Logout</Button>
                </Toolbar>
            </AppBar>
         </div>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    space: {
      marginRight: theme.spacing(4),
    },
    title: {
      flexGrow: 1,
    },

  }));

export default NavBar;