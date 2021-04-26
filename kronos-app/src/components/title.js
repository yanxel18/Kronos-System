import React from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  titledesign: {
    width: 500,
    textAlign: "left",
    fontWeight: "bold",
    color: "#505050",
    margin: 0,
  },
}));
export default function Title() {
  const inReducer = useSelector((state) => state.InitialState);
  const classes = useStyles();
  const title = inReducer.title;
  return (
    <Typography variant="h5" color="inherit" className={classes.titledesign}>
      {title}
    </Typography>
  );
}
