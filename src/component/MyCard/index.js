// import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import {Link } from "react-router-dom";



// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//     height:490
//   },
//   media: {
//     height: 160,
//   },
// });

// const MyCard = (props) => {
//   const classes = useStyles();

//   return (
     
//     <Card elevation={7} className={classes.root} onClick={props.onClick}>
//       <CardActionArea>
//         <CardMedia
       
//           style = {{ height: 0, paddingTop: "90%"}}
//           className={classes.media}
//           image={img}
//           title="Chatting App"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Chatting App
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//                 A Simple. Reliable. Instant messaging app, where you can connect to rest of the world!
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <br /><br /><br />
//         <Link to={"/chat"} style={{ textDecoration: 'none' }}>
//             <Button size="small" color="primary">
//                 Learn More
//             </Button>
//         </Link>
//       </CardActions>
//     </Card>
  
//   );
// }

// export default MyCard;


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
    maxWidth: 345,
    borderRadius: 15,
    position: "relative",
  },
  media: {
    height: 240,
  },
});

export default function MyCard(props) {
  const classes = useStyles();

  return (
    <Card elevation={8} className={classes.root} onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageUrl}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.descrp}
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

MyCard.propTypes = propTypes;
