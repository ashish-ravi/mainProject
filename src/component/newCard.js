import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    
    borderRadius: 15,
    position: "relative",
  },
  media: {
    height: 240,
  },
});

export default function NewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imgs}
          title="Contemplative Reptile"
        />
        <CardContent  style={{backgroundColor: "#1f1f1f"}}>
          <Typography gutterBottom style={{color:"#CCCCCC", fontWeight: "bold", fontSize: 16}}>
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      { props.isNew? <Typography style={{position: "absolute", top:15, left: 15, backgroundColor: "white", borderRadius: 10, paddingLeft: 6, paddingRight: 6, fontWeight: "bold", fontSize: 12}}>NEW</Typography> : null  }
      
    </Card>
  );
}

const propTypes = {
    title: PropTypes.string.isRequired,
    isNew: PropTypes.bool.isRequired,
};

NewCard.propTypes = propTypes;
