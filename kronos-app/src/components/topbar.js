import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ComponentStyle from "../components_style/componentstyle";
import { RefreshAPI } from "./ViewMonitor";
import NetworkCheck from "./connectioncheck";
import SystemClock from "../components/clock";
import Title from "../components/title";
import SideMenu from "../components/sidemenu";
export default function DenseAppBar() {
  const classes = ComponentStyle();
  RefreshAPI();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.menuToolBar}>
          <SideMenu /> <Title />
          <SystemClock />
          <NetworkCheck />
        </Toolbar>
      </AppBar>
    </div>
  );
}
