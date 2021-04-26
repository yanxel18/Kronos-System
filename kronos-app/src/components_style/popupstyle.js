import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  InMenuButton: {
    color: "white",
    backgroundColor: "#0e49b5",
    width: 100,
    height: 100,
    margin: theme.spacing(0.5),
    borderRadius: 0,
    "& > *": {
      display: "flex",
      fontSize: 50,
      textAlign: "center",
    },
    "&:hover": {
      backgroundColor: "#ffa45b",
    },
  },
  OutMenuButton: {
    color: "black",
    backgroundColor: "#fffaa4",
    width: 100,
    height: 100,
    margin: theme.spacing(0.5),
    borderRadius: 0,
    "& > *": {
      display: "flex",
      fontSize: 50,
      textAlign: "center",
    },
    "&:hover": {
      backgroundColor: "#ffa45b",
    },
  },
  YasumiMenuButton: {
    color: "white",
    backgroundColor: "#ec524b",
    width: 100,
    height: 100,
    margin: theme.spacing(0.5),
    borderRadius: 0,
    "& > *": {
      display: "flex",
      fontSize: 50,
      textAlign: "center",
    },
    "&:hover": {
      backgroundColor: "#ffa45b",
    },
  },
  StatusOutButton: {
    "& > *": {
      display: "flex",
      fontSize: 40,
      textAlign: "center",
    },
  },
  userIn: {
    fontSize: 42,
    color: "white",
    backgroundColor: "#0e49b5",
    width: 70,
    height: 70,
    textAlign: "center",
    borderRadius: 0,
  },
  userOut: {
    fontSize: 42,
    color: "black",
    backgroundColor: "#fffaa4",
    width: 70,
    height: 70,
    textAlign: "center",
    borderRadius: 0,
  },
  userLeave: {
    fontSize: 42,
    color: "white",
    backgroundColor: "#ec524b",
    width: 70,
    height: 70,
    textAlign: "center",
    borderRadius: 0,
  },
  userDefault: {
    fontSize: 42,
    color: "white",
    backgroundColor: "blue",
    width: 70,
    height: 70,
    textAlign: "center",
    borderRadius: 0,
  },
  StatusButtonBlank: {
    borderRadius: 0,
    border: "0px",
    width: 228,
    height: 68,

    "& > *": {
      color: "gray",
      fontSize: 25,
      fontWeight: "normal",
      textAlign: "center",
    },
  },

  StatusButtonData: {
    borderRadius: 0,
    border: "0px",
    width: 228,
    height: 68,
    "& > *": {
      color: "gray",
      fontSize: 25,
      fontWeight: "normal",
      textAlign: "center",
    },
  },
  StatusLocation: {
    width: 225,
    display: "block",
    color: "gray",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  StatusButtonRemarks: {
    color: "gray",
    wordWrap: "break-word",
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "center",
  },
  StatusContainer: {
    "& > *": {
      width: 230,
    },
  },

  dialogcontent: {
    alignContent: "center",
    textAlign: "center",
  },
  SelectedButton: {
    width: 200,
    height: 55,
    backgroundColor: "#b1f1b2",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);",

    "& > *": {
      color: "#1e757b",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    "&:hover": {
      backgroundColor: "#ffba5a",
    },
  },
  SelectButtonDiv: {
    "& > *": {
      margin: 5,
      bottom: theme.spacing(1.3),
      display: "inline-block",
      float: "center",
      alignContent: "center",
      width: 200,
    },
  },
  RemarksErrorMSG: {
    color: "red",
  },
}));

export default useStyles;
