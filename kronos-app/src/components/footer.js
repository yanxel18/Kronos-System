import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  footer: {
    "& > *": {
      margin: 0,
      position: "fixed",
      backgroundColor: "#eba740",
      textAlign: "center",
      bottom: 0,
      left: 0,
      width: "100%",
      padding: 5,
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Paper className={classes.footer}>
      <Typography>Taiyo Yuden Co., Ltd ©2021</Typography>
    </Paper>
  );
}
