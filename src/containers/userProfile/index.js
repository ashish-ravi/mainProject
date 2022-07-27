import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import CommCard from "../../component/MyCard/comcard";

import NavBar from "../../component/navbar";

const UserProfile = (props) => {
  const friends = useSelector((state) => state.friends);
  console.log(friends);
  const result = friends.filter((friend) => {
    return friend.login.uuid === props.match.params.id;
  });
  console.log(result);

  return (
    <>
      <NavBar />
      <center>
        <h1>
          {" "}
          {result[0].name.first} {result[0].name.last}{" "}
        </h1>
        <img src={result[0].picture.large} />
        <br />
        <br />
        <Typography>
          <b>NAME:</b> &nbsp; {result[0].name.first}{" "}
        </Typography>

        <Typography>
          <b>GENDER:</b> &nbsp; {result[0].gender}{" "}
        </Typography>
        <Typography>
          <b>CELL NO:</b> &nbsp; {result[0].cell}{" "}
        </Typography>
        <Typography>
          <b>EMAIL:</b> &nbsp; {result[0].email}{" "}
        </Typography>
        <Typography>
          <b>PHONE NO:</b> &nbsp; {result[0].phone}{" "}
        </Typography>
      </center>
    </>
  );
};

export default UserProfile;
