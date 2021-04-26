import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SelectBulletin  from './homeSelectBoardView';
import SelectCreateBulletin from './homeSelectCreateBoard'
import SelectMember from './homeSelectMember'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6} spacing={3}>
          <SelectBulletin/>
        </Grid>
        <Grid item xs={12} sm={6} spacing={3}>
        <SelectCreateBulletin/>
        </Grid>
        <Grid item xs={12} sm={6} spacing={3}>
        <SelectMember/>
        </Grid>
        <Grid item xs={12} sm={6} spacing={3}>
        <SelectMember/>
        </Grid>
      </Grid>
      
 
    </div>
  );
}
