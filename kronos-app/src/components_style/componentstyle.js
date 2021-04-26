import { makeStyles } from "@material-ui/core/styles";

const ViewingTheme = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  menuToolBar: {
    backgroundColor: "#eba740",
  },
  container_style: {
    backgroundColor: "#f3f1f1",
    height: "100vh",
  },
  UserCards: {
    minWidth: 620,
    width: 620,
    height: 70,
    margin: 5,
    position: "relative",
  },
  userAvatarArea: {
    float: "left",
    height: 70,
    paddingTop: 13,
    paddingLeft: 5,
    paddingRight: 5,
  },
  userLocation: {
    border: "1px solid #cccccc",
    display: "inline-block",
    position: "inherit",
    float: "right",
    height: 70,
    width: 230,
    textAlign: "center",
    overflow: "hidden",
    padding: 0,
    fontSize: 20,
  },
  userName: {
    display: "inline-block",
    position: "inherit",
    textAlign: "center",
    paddingTop: 13,
    width: 250,
    height: 70,
    textTransform: "uppercase",
    overflow: "hidden",
  },

  userContainer: {
    display: "inline-block",
    height: 70,
    width: "100%",
  },

  userStatus: {
    display: "inline-block",
    position: "inherit",
    fontSize: 45,
    width: 70,
    height: 70,
    float: "right",
    textAlign: "center",
    color: "white",
  },
  userGroupName: {
    display: "inline-block",
    position: "inherit",
    textAlign: "center",
    paddingTop: 13,
    width: 310,
    height: 70,
    overflow: "hidden",
  },
  userGroupLocationName: {
    display: "inline-block",
    position: "inherit",
    textAlign: "center",
    paddingTop: 13,
    width: 310,
    height: 70,
    overflow: "hidden",
  },

  UserPerGroup: {
    minWidth: 620,
    margin: "0 auto",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default ViewingTheme;
