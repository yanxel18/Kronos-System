import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import useStyles from "../components_style/popupstyle";
import StatusButtonList from "./windowstatusbutton";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { ShowStatusList } from "../actions/index";
import {
  CHANGE_STATUS_FLAG,
  USER_SELECTED_STATUS,
  STATUS_SELECT,
} from "../actions/type";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { UpdateOtherStatus } from "../actions/index";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function SelectStatusMenu(props) {
  const SelectedStats = useSelector(
    (state) => state.BulletinStateVar.SelectedStatus
  );
  const BoardID = useSelector((state) => state.BulletinStateVar.BoardID);
  const SelectedLoc = SelectedStats.location;
  const SelectedUserID = SelectedStats.userid;
  const SelectedLocID = SelectedStats.locationid;
  const [JustOpen, SetJustOpen] = useState(false);
  const [ErrorMSG, SetErrorMSG] = useState("");
  const [TxtRemarks, SetTxtRemarks] = useState("");
  const dispatch = useDispatch();
  const sU = props.UserSelectedStatus;
  const userlocation = sU.location;
  const userRemarks = sU.remarks;
  const CHARACTER_LIMIT = 30;
  const [values, setValues] = React.useState({
    name: "",
  });
  const userstatuswrite = (d) => {
    if (d !== "") {
      return <span>{userlocation}</span>;
    } else {
      return <span>--</span>;
    }
  };
  const [open, setOpen] = React.useState(false);
  const mystyle = useStyles();
  const handleClickOpen = () => {
    dispatch(ShowStatusList(BoardID));
    dispatch({ type: USER_SELECTED_STATUS, payload: sU });
    dispatch({ type: CHANGE_STATUS_FLAG, payload: true });
    setOpen(true);
  };
  const handleClose = () => {
    SetJustOpen(false);
    let SelectedStatus = {
      userid: "",
      locationid: "",
      location: "",
      remarks: "",
    };
    SetTxtRemarks("");
    let msg = Object.assign({}, SelectedStatus);
    dispatch({ type: CHANGE_STATUS_FLAG, payload: false });
    dispatch({ type: STATUS_SELECT, payload: msg });
    setOpen(false);
  };
  useEffect(() => {
    if (JustOpen === true) {
      if (SelectedUserID === "") {
        SetErrorMSG("行き先を選択してください。");
      } else if (SelectedUserID !== "") {
        SetErrorMSG("");
      }
    }
  }, [SelectedUserID, JustOpen]);

  const selectClick = (event) => {
    SetJustOpen(true);
    if (SelectedUserID !== "") {
      SetJustOpen(false);
      let SelectedStatus = {
        userid: SelectedUserID,
        locationid: SelectedLocID,
        location: SelectedLoc,
        remarks: TxtRemarks,
      };
      let msg = Object.assign({}, SelectedStatus);
      dispatch({ type: STATUS_SELECT, payload: msg });
      dispatch(UpdateOtherStatus(msg));
      handleClose();
    }
  };
  const changeStatusColor = (p) => {
    switch (p) {
      case "":
        return mystyle.StatusButtonBlank;
      default:
        return mystyle.StatusButtonData;
    }
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
    SetTxtRemarks(event.target.value);
  };

  return (
    <div>
      <Button
        className={changeStatusColor(userlocation)}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        <div className={mystyle.StatusContainer}>
          <Typography className={mystyle.StatusLocation}>
            {userstatuswrite(userlocation)}
          </Typography>
          <Typography className={mystyle.StatusButtonRemarks}>
            {userRemarks}
          </Typography>
        </div>
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        maxWidth="md"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          行き先 （選択肢）: {SelectedLoc}
          <Typography className={mystyle.RemarksErrorMSG}>
            {ErrorMSG}
          </Typography>
        </DialogTitle>

        <DialogContent dividers>
          <div className={mystyle.dialogcontent}>
            <StatusButtonList />
          </div>
        </DialogContent>
        <DialogActions>
          <FormControl fullWidth margin="dense">
            <TextField
              id="memotxt"
              variant="outlined"
              label="メモ（オプション）"
              inputProps={{
                maxLength: CHARACTER_LIMIT,
              }}
              helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
              onChange={handleChange("name")}
            />
          </FormControl>
          <div className={mystyle.SelectButtonDiv}>
            <FormControl>
              <Button onClick={selectClick} className={mystyle.SelectedButton}>
                選択
              </Button>
            </FormControl>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
