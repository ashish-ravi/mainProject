import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import fire from "./fire";
import Chat from "./containers/chat";
import { TextField,Grid } from "@material-ui/core";
import NavBar from "./component/navbar";
import {useDispatch, useSelector} from "react-redux";
import MyCard from "./component/MyCard";
import MyCard2 from "./component/MyCard/app";
import CommCard from "./component/MyCard/comcard";
import FriendCard from "./component/MyCard/frdcard";

import { increment, decrement,usersInfo } from "./redux/actions";
import {Link } from "react-router-dom";
import img from "./codecolab1.gif";
import chtimg from "./chatapp1.gif";
import frds from "./frnds.png";

import weatherimg from "./weather.jpg";



function App(props) {
 
  const counter = useSelector((state)=>state.counter)
  // console.log(counter);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(10));
  }

  const handleDecrement = () => {
    dispatch(decrement(5));
  }

  const handleCardClick = (lin) => {
    props.history.push(`/${lin}`);
  }

  useEffect( () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var providerData = user.providerData;
        console.log("this is in home", user);
        dispatch(usersInfo(user));
        // ...
      } else {
        props.history.push("/")
        // User is signed out
        // ...
      }
    });
  }, [])

  const data = useSelector((state) => state );
  console.log(data);

  const userss = useSelector((state) => state.usrs[0]);
  // console.log(userss.photoURL)

  return (
    <div >
      <NavBar history={props.history} />      
      <p>{counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <Link to={"/user"}><button>Network call</button></Link>

      <h1 style={{marginTop: 30, textAlign: "center"}}>My Home Page</h1><br />
      <div style={styles.content}>
        <Grid container justify="left" style={{display:"inline-flex", overflow:"auto", }}>
          <Grid item xs={12} sm={6} md={3}>
            <MyCard  onClick={()=>{handleCardClick("chat")}} />
          </Grid>
        
          <Grid item xs={12} sm={6} md={3}>
            <MyCard2  onClick={()=>{handleCardClick("codecollab")}} imageUrl={img} Title={"Code Collab"} Description={"A Real time codecollaborator. Multiple users can test and run code in real-time collaborative environment"} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <MyCard2  onClick={()=>{handleCardClick("weather")}} imageUrl={weatherimg} Title={"Weather"} Description={"Get the forcast for any City! Get details about Temperatures, Wind Speed, Pressure, Max and min temp etc"} />
          </Grid>

          <Grid item xd={32} sm={6} md={3}>
            <FriendCard onClick={()=>{handleCardClick("user")}} imageUrl={frds} Title={"Friends"} Description={"Connect to your Friends!"} />
          </Grid>
          
          


          
        </Grid>
        
        
      </div>
    </div>
  );
}

const styles = {
  content: {
    display: "flex",
    flex: 1,
    minHeight: "100vh",
    marginTop: 30,
    padding: 20,
    marginLeft: 80,
    overflow: "auto",
    
    
  }
}

export default App;
