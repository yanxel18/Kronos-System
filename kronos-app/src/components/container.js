import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card"; 
import BulletinGroup from "./bulletinGroup";

const useStyles = makeStyles((theme) => ({
  BoardContainerStyle: {
    padding: 10,
    backgroundColor: "#fafafa",
    width: "100%",
  },
}));

export default function KronosContainer() {

  const classes = useStyles();
  return (
    <Card variant="outlined" square className={classes.BoardContainerStyle}>
      <BulletinGroup />
    </Card>
  );
}
