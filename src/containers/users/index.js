import React, {useEffect, useState} from "react";
import CommCard from "../../component/MyCard/comcard";
import {Button, Grid, TextField} from "@material-ui/core";
import { saveFriendsList } from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

import NavBar from "../../component/navbar";

const Users = (props) => {
    const dispatch = useDispatch();


    useEffect( () => {
        fetch("https://randomuser.me/api/?results=25")
            .then(response => response.json())
            .then(data => dispatch(saveFriendsList(data.results)));


        fetch("http://localhost:8000/users")
            .then(response => response.json())
            .then(data => {console.log(data)});
    }, [] );

    const friends = useSelector((state) => state.friends );

    const storeState = useSelector((state) => state );
    console.log(storeState);

    console.log(friends);

    const handleCardClick = (id) => {
        props.history.push(`/user/${id}`);
    };

    const[showForm, setForm] = useState(false)
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[num, setNum] = useState("")

    const handleChange = (e) => {
        let val = e.target.value;
        setName(val)
    }
    const handleEmail = (e) => {
        let val = e.target.value;
        setEmail(val)
    }
    const handleNum = (e) => {
        let val = e.target.value;
        setNum(val)
    }



    const addUser = () => {
        fetch('http://localhost:8000/users', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name:{name}, email:{email}, mobileNumber:{num} }),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
        });
    }
    const Form = () => {
        return(
            <div style={{display:"inline", margin: 30, padding: 30}}>
                <form style={{ spacing: "10%", margin: 30}}>
                    
                    <TextField id="standard-basic" label="Name" onChange={handleChange} autoComplete="false" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField id="standard-basic" label="Email" onChange={handleEmail} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField id="standard-basic" label="Mobile number" onChange={handleNum} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    
                    
                    <Button variant="contained" color="secondary" size="medium" onClick={addUser} style={{ marginTop: 10}}>Add data</Button>
                </form>
            </div>
        )
    }
   return(
            <>
                <NavBar />
                <h1 style={{marginLeft: 30}}>Users</h1>
                <Button variant="contained" onClick={() => {setForm(true)}} color="primary" size="large" style={{marginBottom: 20, marginLeft: 30}}>Add User</Button>
                
                {
                    
                    showForm ? <Form /> : null
                }
                <Grid container justify="center" spacing={2} style={{margin:30}}>
                {
                    friends.map((friend, i) => {
                        return(
                                <Grid item key={i} spacing={2}>
                                <CommCard onClick={()=>{handleCardClick(friend.login.uuid)}} imageUrl={friend.picture.large} Title={ `${friend.name.first} ${friend.name.last} `} Description={friend.email}  />
                                </Grid>
                        )
                    } )
                }
                </Grid>

                
            </>
        
   );
};

export default Users;
