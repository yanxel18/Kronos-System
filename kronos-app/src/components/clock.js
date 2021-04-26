import { useEffect, useState } from "react";
import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Moment from "react-moment";
const useStyles = makeStyles((theme) => ({
  clock: {
    borderRadius: 0,
    color: "#474747",
    width: "100%",
    textAlign: "left",
    backgroundColor: "#eba740",
  },
  TimeInside: {
    color: "#505050",
    fontWeight: "bold",
    textAlign: "right",
    fontSize: 48,
    fontFamily: "Verdana,Arial",
    marginTop: 0,
    width: "50%",
    backgroundColor: "#eba740",
    display: "inline-block",
  },
  DateInside: {
    width: "50%",
    textAlign: "right",
    color: "#505050",
    height: "100%",
    fontWeight: "bold",
    paddingBottom: "30",
    fontSize: 35,
    marginTop: 0,
    backgroundColor: "#eba740",
    display: "inline-block",
  },
}));
export default function ConnectionCheck() {
  const [TimeState, TimeSet] = useState("");
  const [DateState, DateSet] = useState("");
  const classes = useStyles();
  const ticker = () => {
    let TimeNow = new Date();
    if (TimeNow.getMinutes() % 30 === 0 && TimeNow.getSeconds() === 0) {
      window.location.reload();
    }
    return <Moment locale="ja" format="HH:mm:ss" date={TimeNow} />;
  };
  const DateYear = () => {
    let DateNow = new Date();
    return <Moment locale="ja" format="YYYY/MM/DD" date={DateNow} />;
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      TimeSet(ticker());
      DateSet(DateYear());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [TimeSet, DateSet]);
  return (
    <Card className={classes.clock} elevation={0}>
      <div className={classes.TimeInside}>{TimeState}</div>
      <div className={classes.DateInside}>{DateState}</div>
    </Card>
  );
}
