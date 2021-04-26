import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'; 
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    flexGrow: 1, 
  },
  media: {
    height: 100,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          掲示板作成
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          カスタム掲示板を作成し、掲示板会員を追加する。
          </Typography>
        </CardContent>
      </CardActionArea> 
    </Card>
  );
}
