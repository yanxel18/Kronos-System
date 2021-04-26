import React, { useState, useEffect } from "react";
import Menu from "@material-ui/core/Menu";
import { CHANGE_STATUS_FLAG } from "../actions/type";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserIn, UpdateUserOut, UpdateUserLeave } from "../actions/index";
import useStyles from "../components_style/popupstyle";

export default function ChangeStatusButton(prop) {
  const iniState = useSelector((state) => state.InitialState);
  const inStatus = iniState.UserStatusSelection.In;
  const outStatus = iniState.UserStatusSelection.Out;
  const leaveStatus = iniState.UserStatusSelection.Leave;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userID, setUserID] = useState(null);
  const [selectedStatus, setselectedStatus] = useState(null);
  const StatusText = prop.param.status;
  const PropKey = prop.param.thiskey;

  const handleClick = (event) => {
    event.preventDefault();
    dispatch({ type: CHANGE_STATUS_FLAG, payload: true });
    setUserID(event.currentTarget.value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.preventDefault();
    dispatch({ type: CHANGE_STATUS_FLAG, payload: false });
    setselectedStatus(event.currentTarget.value);
    setAnchorEl(null);
  };

  useEffect(() => {
    if ((userID != null) & (selectedStatus != null)) {
      switch (selectedStatus) {
        case "1":
          dispatch(UpdateUserIn(userID));
          break;
        case "2":
          dispatch(UpdateUserOut(userID));
          break;
        case "3":
          dispatch(UpdateUserLeave(userID));
          break;
        default:
          break;
      }
    }
    return;
  }, [userID, selectedStatus, dispatch]);

  const changeStatusColor = (StatusVal) => {
    switch (StatusVal) {
      case inStatus:
        return classes.userIn;
      case outStatus:
        return classes.userOut;
      case leaveStatus:
        return classes.userLeave;
      default:
        break;
    }
  };
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        className={changeStatusColor(StatusText)}
        aria-haspopup="true"
        value={PropKey}
        onClick={handleClick}
      >
        {StatusText}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        key={PropKey}
      >
        <Button
          onClick={handleClose}
          value="1"
          className={classes.InMenuButton}
        >
          {inStatus}
        </Button>
        <Button
          onClick={handleClose}
          value="2"
          className={classes.OutMenuButton}
        >
          {outStatus}
        </Button>
        <Button
          onClick={handleClose}
          value="3"
          className={classes.YasumiMenuButton}
        >
          {leaveStatus}
        </Button>
      </Menu>
    </div>
  );
}
