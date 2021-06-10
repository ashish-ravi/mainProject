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
import img from "../../codecolab1.gif";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 160,
  },
});

const CommCard = (props) => {
  const classes = useStyles();

  return (
     
    <Card className={classes.root} onClick={props.onClick}>
      <CardActionArea >
        <CardMedia
       
          style = {{ height: 0, paddingTop: "90%"}}
          className={classes.media}
          image={props.imageUrl}
          title={props.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        
            <Button size="small" color="primary">
                Learn More
            </Button>
        
      </CardActions>
    </Card>
  
  );
}

export default CommCard;