import React, { useState, useEffect, useRef } from "react";
import { Grid,TextField,Button,IconButton, Typography } from "@material-ui/core";
import fire from "../../fire";
import FaceTwoToneIcon from '@material-ui/icons/FaceTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import NavBar from "../../component/navbar";
import Background from "../../hello.png";

import { useSelector } from "react-redux";


const Chat = () => {
    
    const users = useSelector((state) => state.usrs);

    const nm = users.displayName;
    const phto = users.photoURL;


    const [message,setMessage] = useState("");
    const [revMessages,setRevMessages]= useState([]);
    const[name , setName] = useState("");
    

    const  handleChange = (e) => {
        // console.log(e.target.value);
        let val = e.target.value;
        setMessage(val);
       
        
    }
    const messageEl = useRef(null);
    useEffect(() => {
        if (messageEl) {
          messageEl.current.addEventListener('DOMNodeInserted', event => {
            const { currentTarget: target } = event;
            target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
          });
        }
      }, [])

    // useEffect( () => {
    //     readMessageFromDatabase();
    // } , [] )

    const handleClick = () => {
        fire.database().ref("/chat").push({
            message: message,
            user: phto,
            username: nm
        
        });
        //if we use set instead of push, /chat can contain only one value, we use push becuase /chat can store multiple values
        // alert(message);
        
        setMessage("");
    }

    useEffect(() => {
        readMessageFromDatabase();
        
        
      }, []);



  

  

    const readMessageFromDatabase = () => {
        fire.database().ref("/chat").on("value", (snapshot) => {
            
            const messagesArray = [];
            const messagesObject = snapshot.val();
            for( let key in messagesObject){
                // console.log(messagesObject[key]);
                messagesArray.push(messagesObject[key]);
            }
            setRevMessages(messagesArray);
            // console.log(snapshot.val());
        } );
    };

    const deleteClick = () => {
        fire.database().ref("/chat").remove()
    }

    //Refer docs from firebase realtime database docs
    //This function has to be used only once. to call it multiple times use: useEffect

   
  
     const myFunction = () => {
        const person = prompt("Please enter your name: ","Ashish");
        if(person != null){
            setName(person)
        }
        else{
            setName("Ashish")
        }    
    }
    

    console.log("messages",revMessages);
    return(
        <div>
        {/* // <div style={{backgroundImage: `url(${Background})` , backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"right top", overflow: "hidden" }}> */}
        <NavBar />
        <br />
        <div style={{marginLeft: 100, color: "red"}}>
            <Typography>Update: </Typography>
            <Typography>Refined User Interface</Typography>
            <Typography>Press Enter to send messagess</Typography>
        </div>
         <center></center>
            <div style={styles.content}>
               
                <Grid container justify="center" style={styles.chatContainer} >
                    <Grid item md={6} justify="center" style={{display:"flex", alignItems: "center"}}>
                    <iframe width="900" height="525" src="https://www.youtube.com/embed/8vqGvjLOYic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                    </Grid>
                    
                    
                    <Grid item md={5} style={{ border: "3px solid rgba(0,0,0,0.2)", borderRadius: 20,  backgroundColor:"#DDDB2A", color:"black", marginTop: 40}} >
                        <Typography variant={"h6"} style={{paddingTop: 15, paddingLeft: 25}}>VApp</Typography>
                        <br/>
                        
                        <Grid container >
                            <Grid item md={12} style={{backgroundColor:"#F0F0F0", color:"black", padding:20, borderBottom: "3px solid rgba(0,0,0,0.2)" }} >
                            <FaceTwoToneIcon fontSize="large" color="secondary" />&nbsp;&nbsp;&nbsp;<b style={{fontSize:"25px"}}>  Coconut</b>
                               <br/>
                               
                            </Grid>

                        </Grid>
                        <Grid container style={{height:"50vh", overflow:"auto", backgroundColor:"white", color:"black", }} ref={messageEl}>
                            <Grid item md={12} ref={messageEl} style={{paddingLeft: 3}}>
                                {
                                /* <p>Hi</p>
                                <p>Hello</p>
                                <p>Hey</p>
                                <p>Bye</p> */
                                revMessages.length > 0 ? (
                                    revMessages.map((msg,i) => {
                                        return(
                                            <span spacing="9"><br/>
                                            {/* <span style={{fontSize:"12px",fontFamily:"cursive", color:"red", marginBottom: 20 }}>{msg.user}</span><br/> */}
                                            {
                                                msg.username !== nm ? (
                                                    <span>
                                                        <img src={msg.user} style={{borderRadius: "50%", width: "35px", height:"35px", verticalAlign: "middle" }}></img>
                                                        <span key={i} style={{padding: 12, fontWeight: 400, fontSize: 17, margin: 10, border: "solid ", borderWidth: "1px",borderColor: "#808080", backgroundColor: "#808080", color: "white",  borderRadius: 20, borderBottomLeftRadius: 0,  }} > {msg.message} </span>
                                                        <br />
                                                        <br />
                                                    </span>
                                                    ) : (
                                                        <span style={{display: "flex", justifyContent: "flex-end", alignItems: "flex-end"}}>
                                                            <span key={i} style={{padding: 12, fontWeight: 400, fontSize: 17, margin: 10, border: "solid ", borderWidth: "1px", borderColor: "#539BFF", backgroundColor: "#539BFF", color: "white",  borderRadius: 20, borderBottomRightRadius: 0,  }} > {msg.message} </span>
                                                            <img src={msg.user} style={{borderRadius: "50%", width: "35px", height:"35px", }}></img><br />
                                                            <br />
                                                        </span>
                                                    )
                                            }
                                            
                                            </span>
                                        );
                                    } )
                                ) : (
                                    <Typography>No new messages</Typography>
                                )
                                }

                                
                            </Grid>
                        </Grid>
                        <form action="javascript:void(0)" onSubmit={handleClick}>
                        <Grid container justify="center" alignItems="center" spacing= "4" style={{ padding:15 }} >
                            <Grid item md={11}>
                                <TextField fullWidth style={{ width:"100%", }} borderRadius="50%" id="standard-basic" label="Enter Message" autoComplete="off" variant="outlined" onChange={handleChange} value= {message} borderRadius="50%" margin="none"  />
                            </Grid>
                            <Grid item md={1}>
                           
                               <IconButton type="submit" variant="outlined" color="primary" size="large"   >  <SendIcon /></IconButton>
                               
                            </Grid>
                        </Grid>
                        </form>

                    </Grid>
                    
                    

                    
                    
                </Grid>
                
                
                
                <Button variant="outlined" size="large" onClick={deleteClick} style={{ borderRadius: 10, marginTop: "25vh", marginLeft: "140vh"}}>Delete messages</Button>  
            </div>
            
        </div>
    );
};

const styles = {
    content: {
        minHeight: "140vh",
        marginTop: 30,
        
    },
    chatContainer: {
        height: "60vh",
        
        
    }
};

const sty = theme => ({
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "yellow !important"
    }
  });
export default Chat;