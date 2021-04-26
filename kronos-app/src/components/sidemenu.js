import React from "react";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import MenuIcon from "@material-ui/icons/Menu";
import ComponentStyle from "../components_style/componentstyle";
import IconButton from "@material-ui/core/IconButton";
import ListIcon from "@material-ui/icons/List";
import { Link } from "react-router-dom";
export default function SwipeableTemporaryDrawer() {
  const classes = ComponentStyle();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {" "}
      　
      <List>
        <ListItem>
          <ListItemIcon>
            {" "}
            <ListIcon />{" "}
          </ListItemIcon>
          <ListItemText primary="掲示板表示" />
        </ListItem>
        　
        <Divider />
        <ListItem button component={Link} to="/Bulletin/1/">
          <ListItemIcon>
            {" "}
            <ViewColumnIcon />{" "}
          </ListItemIcon>
          <ListItemText>smart.E推進部</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/Bulletin/3/">
          <ListItemIcon>
            {" "}
            <ViewColumnIcon />{" "}
          </ListItemIcon>
          <ListItemText>TakasakiGC</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      　
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
