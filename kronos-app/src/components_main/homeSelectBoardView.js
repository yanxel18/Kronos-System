import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'; 
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import BoardImg from "../images/dashboard.jpg";
const useStyles = makeStyles({
  root: {
    flexGrow: 1, 
  },
  media: {
    height: 100,
  },
  myIcon:{ 
 display:"inline-block",
    border:"1px solid red",
    position:"inherit",
    right:0,
    top:0,
    height:100,
    width:100
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea> 

        <CardContent> 
        <Typography gutterBottom variant="h5" component="h2">
            掲示板表示
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          選択したエリアの掲示板を表示する。 
          </Typography> 

        </CardContent>
      </CardActionArea> 
    </Card>
  );
}
