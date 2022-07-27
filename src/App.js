import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import fire from "./fire";
import Chat from "./containers/chat";
import { TextField,Grid, Typography, Button } from "@material-ui/core";
import NavBar from "./component/navbar";
import {useDispatch, useSelector} from "react-redux";
import MyCard from "./component/MyCard";
import NewCard from "./component/newCard";
import BigCard from "./component/bigCard";
import Footer from "./component/footer";

import { increment, decrement,usersInfo } from "./redux/actions";
import {Link } from "react-router-dom";

import chatimg from "./chat .jpg";
import img from "./code.jpg";

import frds from "./friends.jpg";

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
      
      <div style={{overflow: "hidden",  position: "relative"}}>
      <NavBar history={props.history} style={{position: "absolute", }} />
      <img src="https://a0.muscache.com/im/pictures/b65bef33-07be-4c55-b613-bb990193e8f6.jpg?im_q=highq&im_w=720"  style={{width:"100%", height: 2400, margin: "-1600px 0 0 0px"}}></img>
      <Grid>
          <Grid container>
              <Grid item md={2} xs={1} sm={1} style={{position: "absolute" , top:350, left: 150}}>
                <Typography  variant={"h2"} style={{ fontWeight: 800, textShadow: "1px 3 black",}}>The Greatest Outdoors</Typography>
                <Typography style={{fontSize: 20}}>Wishlist curated by Airbnb.</Typography>
                <Button variant="contained" style={{marginTop: 10, borderRadius: 10, backgroundColor: "black", color: "white"}}>Get inspired</Button>
              </Grid>
              
          </Grid>

      </Grid>     
      </div>
      <Grid style={{marginLeft: 135, marginRight: 135}}>
        
          <Grid container style={{marginTop: 80}}>
            <Grid item xs={12} sm={6} md={6}>
              <Typography variant={"h3"} style={{ fontWeight: 450, background: "linear-gradient(to right, rgb(146, 23, 77) 9.38%, rgb(228,29,92) 88.54% )", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>You don't need to go far to find what matters</Typography>
            </Grid>
          </Grid>

          <Grid container style={{flex: 1, justifyContent: "center", alignItems: "center", marginTop: 70}} spacing={3} >
            
              <Grid item xs={12} sm={6} md={3}>
                <MyCard title={"Chatting App"} imageUrl={chatimg} descrp={"A Simple. Reliable. Instant messaging app, where you can connect to rest of the world!"} isNew={true}  onClick={()=>{handleCardClick("chat")}} />
              </Grid>
            
              <Grid item xs={12} sm={6} md={3}>
                <MyCard  onClick={()=>{handleCardClick("codecollab")}} imageUrl={img} title={"Code Collab"} descrp={"A Real time codecollaborator. Multiple users can code in real-time collaborative environment"} isNew={false} />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <MyCard  onClick={()=>{handleCardClick("weather")}} imageUrl={weatherimg} title={"Weather"} descrp={"Get the forcast for any City! Get details about Temperatures,  Pressure, Max and min temp etc"} isNew={true} />
              </Grid>

              <Grid item xd={12} sm={6} md={3}>
                <MyCard onClick={()=>{handleCardClick("user")}} imageUrl={frds} title={"Friends"} descrp={"Connect to your Friends! Get to know your friends. Create new Friends"} isNew={true} />
              </Grid>
              
              


              
            </Grid>
        </Grid>

        <div style={{backgroundColor: "black", marginTop: 120}}>
        <Grid style={{marginLeft: 45, marginRight: 135, padding: 80}}>
          <Grid container style={{marginTop: 60, marginBottom: 80}} >
            <Grid item sm={6} md={6}>
              <Typography variant={"h4"} style={{color: "white"}}>Online Experience</Typography>
              <Typography style={{color: "#CCCCCC", marginTop: 10}} >Meet people all over the world while trying something new. Join live, interactive video sessions led by one-of-a-kind hosts- all without leaving home.</Typography>
            </Grid>
            <Grid item sm={5} md={5}></Grid>
            <Grid item sm={1} md={1} >
            <Button variant="outlined" style={{color: "white", borderColor:"white", borderRadius: 10}}>Explore</Button>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{marginTop: 30, marginBottom: 100}}>
            <Grid item xs={12} sm={12} md={6}>
              <BigCard title={"Experiences Local things to do, wherever you are."} isNew={true} imgs={"https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720"} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} >
              <Grid container spacing={3}>
                <Grid item sm={12} md={6}>
                  <NewCard title={"Stretch. Breathe. Relax. Unique Stays."} isNew={false} imgs={"https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720"} />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <NewCard title={"Meditate to music with Jancie"} isNew={false} imgs={"https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=720"} />
                </Grid>

              </Grid>
              <Grid container style={{marginTop: 25}}>
                <Grid item xs={12} sm={12} md={12} >
                  <NewCard title={"Become a Host: Earn extra income and unlock new opportunities by sharing your space."} isNew={true} imgs={"https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=720"} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Grid>

      </div>
      <div>
        <Grid style={{marginLeft: 45, marginRight: 135, padding: 80, marginTop: 120, marginBottom: 120}}>

          <Grid container>

            <Grid item xs={4} sm={4} md={4}>
              <Typography style={{fontWeight: 1000, fontSize: 32}}>Host a hero: helo to house frontline responders around the world</Typography>
              <br />
              <Button variant="outlined" style={{borderRadius: 15, fontWeight:"bold"}}>Get Involved</Button>
            </Grid>

            <Grid item xs={2} sm={2} md={2}></Grid>
            
            <Grid item xs={4} sm={4} md={4}>
              <Typography style={{fontSize: 20, marginLeft: 12}}>With frontline stays, Airbnb is partnering with our hosts to connect 100,000 healthcare providers, relief workers, and first responders with clean places to stay that allow them to be close to their patients - and safely distanced from their pwn families.</Typography>
            </Grid>
          </Grid>

          
          
        </Grid>
      </div>
      <div style={{backgroundColor: "#EBEBEB", padding: 80 }}>
        <Footer />
       
      </div>
        
        
      
      <p>{counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <Link to={"/user"}><button>Network call</button></Link>

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
