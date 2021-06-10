import React from "react";
import {Grid, Typography, Button} from "@material-ui/core";
import fire from "../../fire";
import firebase from "firebase";
import "../../styles.css"



const Login = (props) => {
    var provider = new firebase.auth.GoogleAuthProvider();
    const login = () => {
        fire.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log("this is in login", user);
                
                props.history.push("/home");

                // ...
            }).catch((error) => {
                // Handle Errors here.
                console.log(error);
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
        });
    }
    return(
        <>
            <Grid container justify="center" alignItems="center" style={{height:"100vh"}}>
            <img style={{height:"60px", width:"60px"}}  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/> &nbsp;
                <Grid item>
                
                
                    
                
                
                
                    <Button onClick={login} variant="contained" size="large" color="primary">Sign in with google</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Login;