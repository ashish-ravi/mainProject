import React, { useEffect, useState } from "react";
import CommCard from "../../component/MyCard/comcard";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { saveFriendsList } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../../component/navbar";

const Users = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=25")
      .then((response) => response.json())
      .then((data) => dispatch(saveFriendsList(data.results)));

    fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    fetch("http://localhost:8000/users/del")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  const friends = useSelector((state) => state.friends);

  const storeState = useSelector((state) => state);
  console.log(storeState);

  console.log(friends);

  const handleCardClick = (id) => {
    props.history.push(`/user/${id}`);
  };

  const [showForm, setForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [id, setId] = useState("");
  const [delName, setDelName] = useState("");
  const [delcnfm, setDelCnfm] = useState("");
  const [inscnfm, setInsCnfm] = useState("");

  const handleChange = (e) => {
    let val = e.target.value;
    setName(val);
  };
  const handleEmail = (e) => {
    let val = e.target.value;
    setEmail(val);
  };
  const handleNum = (e) => {
    let val = e.target.value;
    setNum(val);
  };
  const handleId = (e) => {
    let val = e.target.value;
    setId(val);
  };
  const handleNameDel = (e) => {
    let val = e.target.value;
    setDelName(val);
  };

  const addUser = () => {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${name}`,
        email: `${email}`,
        mobileNumber: `${num}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setInsCnfm("User data Added!");
      })
      .catch((error) => {
        console.error("Error:", error);
        setInsCnfm("User data not added :(");
      });
  };

  const delByName = () => {
    fetch("http://localhost:8000/users/del", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: `${delName}` }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("delete Success:", data);
        setDelCnfm("Delete succesfull");
      })
      .catch((error) => {
        console.error("delete Error:", error);
        setDelCnfm("Delete Error");
      });
  };

  const deleteUser = () => {
    fetch(`http://localhost:8000/users/delete/${id}`, {
      method: "POST",
    })
      .then((res) => res.json()) // or res.text()
      .then((data) => {
        console.log("delete Success:", data);
        setDelCnfm("Delete succesfull");
      })
      .catch((error) => {
        console.error("delete Error:", error);
        setDelCnfm("Delete Error");
      });
  };

  return (
    <>
      <NavBar />
      <h1 style={{ marginLeft: 30, marginBottom: 60 }}>Users</h1>
      <Typography style={{ fontSize: 30, marginBottom: 20, marginLeft: 30 }}>
        Add User
      </Typography>
      <div style={{ margin: 30 }}>
        <TextField
          label={"Enter name.."}
          onChange={handleChange}
          autoComplete="false"
        />{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField label={"Enter Email.."} onChange={handleEmail} />{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField label={"Enter Mobile number.."} onChange={handleNum} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={addUser}
          style={{ marginTop: 10 }}
        >
          Add data
        </Button>
        <span style={{ marginLeft: 20 }}>{inscnfm}</span>
      </div>
      <Typography
        style={{
          fontSize: 30,
          marginTop: 80,
          marginBottom: 20,
          marginLeft: 30,
        }}
      >
        Delete User
      </Typography>
      <div style={{ margin: 30 }}>
        <TextField label={"Enter name.."} onChange={handleNameDel} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          onClick={delByName}
          style={{ marginTop: 10 }}
        >
          Delete User
        </Button>
        <span style={{ marginLeft: 20 }}>{delcnfm}</span>
      </div>
      <Grid container justify="center" spacing={2} style={{ margin: 30 }}>
        {friends.map((friend, i) => {
          return (
            <Grid item key={i} spacing={2}>
              <CommCard
                onClick={() => {
                  handleCardClick(friend.login.uuid);
                }}
                imageUrl={friend.picture.large}
                Title={`${friend.name.first} ${friend.name.last} `}
                Description={friend.email}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Users;
