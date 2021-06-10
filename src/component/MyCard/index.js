import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link } from "react-router-dom";
import img from "../../chatapp1.gif";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height:490
  },
  media: {
    height: 160,
  },
});

const MyCard = (props) => {
  const classes = useStyles();

  return (
     
    <Card elevation={7} className={classes.root} onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
       
          style = {{ height: 0, paddingTop: "90%"}}
          className={classes.media}
          image={img}
          title="Chatting App"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Chatting App
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                A Simple. Reliable. Instant messaging app, where you can connect to rest of the world!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <br /><br /><br />
        <Link to={"/chat"} style={{ textDecoration: 'none' }}>
            <Button size="small" color="primary">
                Learn More
            </Button>
        </Link>
      </CardActions>
    </Card>
  
  );
}

export default MyCard;