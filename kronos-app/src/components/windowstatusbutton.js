import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { STATUS_SELECT } from "../actions/type";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  statusbutton: {
    width: 160,
    height: 90,
    margin: 10,
    backgroundColor: "#f2ffdf",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);",

    "& > *": {
      color: "#1e757b",

      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    "&:hover": {
      backgroundColor: "#f6490d",
    },
  },
}));

export default function StatusButtonList() {
  const StatList = useSelector((state) => state.BulletinState.StatusList);
  const SelectedUser = useSelector(
    (state) => state.BulletinStateVar.UserSelectedStatus
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const HandleClick = (event) => {
    event.preventDefault();
    const selectedID = event.currentTarget.value;
    const result = StatList.filter((data) => data.id === Number(selectedID));

    let SelectedStatus = {
      userid: SelectedUser.thiskey,
      locationid: result[0].id,
      location: result[0].loc,
    };
    let msg = Object.assign({}, SelectedStatus);
    dispatch({ type: STATUS_SELECT, payload: msg });
  };

  function ButtonArray() {
    return (
      <React.Fragment>
        {StatList.map((listelement) => (
          <Button
            key={listelement.id}
            value={listelement.id}
            className={classes.statusbutton}
            onClick={HandleClick}
          >
            {listelement.loc}　
          </Button>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <ButtonArray />
    </div>
  );
}
