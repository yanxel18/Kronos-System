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
          掲示板会員
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          掲示板会員の管理、情報の作成および変更。
          </Typography>
        </CardContent>
      </CardActionArea> 
    </Card>
  );
}
