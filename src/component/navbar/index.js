import React, {useState} from "react";
import {AppBar,Toolbar,Typography, Button, IconButton, makeStyles } from '@material-ui/core';
import {Link } from "react-router-dom";
import { useSelector } from "react-redux";





import MenuIcon from '@material-ui/icons/Menu';
import fire from "../../fire";

// npm install --save-dev @iconify/react @iconify-icons/logos
import { Icon, InlineIcon } from '@iconify/react';
import webtorrentIcon from '@iconify-icons/logos/webtorrent';



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
            <AppBar position="static" color="transparent">
                <Toolbar style={{minHeight: 80}}>
                
                <Typography  style={{marginLeft: 70, fontSize: 22, fontWeight: 700}} className={classes.title}>
                <Icon icon={webtorrentIcon} width="50" height="50"  /> 
                </Typography>
                <Link to={"/home"} style={{ textDecoration: 'none' }}>
                    <Button  color="secondary" size="large" className={classes.space}>
                        Home
                    </Button>
                </Link>
                <Link to={"/user"} style={{ textDecoration: 'none' }}>
                    <Button  color="secondary" size="large" className={classes.space}>
                        Friends
                    </Button>
                </Link>
                <Link to={"/chat"} style={{ textDecoration: 'none' }}>
                    <Button color="secondary" size="large" className={classes.space}>
                        Chat
                    </Button>
                </Link>
                <Link to={"/codecollab"} style={{ textDecoration: 'none' }}>
                    <Button color="secondary" size="large" className={classes.space}>
                        CodeCollab
                    </Button>
                </Link>
                <Link to={"/weather"} style={{ textDecoration: 'none' }}>
                    <Button color="secondary" size="large" className={classes.space}>
                        Weather
                    </Button>
                </Link>
               
                <Button color="secondary" size="large" onClick={logout}><img src={photolin} style={{borderRadius: "50%", width: "50px", height:"50px", verticalAlign: "middle" }}></img> &nbsp;  Logout</Button>
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
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },

  }));

export default NavBar;