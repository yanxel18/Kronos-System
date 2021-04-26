import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"; 
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import MainStyle from '../components_style/mainstyle';


export default function ClippedDrawer() {
  const classes = MainStyle(); 
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="fixed" className={classes.appBar} elevation={0}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide,)}
      >
        <MenuIcon />
      </IconButton>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerClose}
        edge="start"
        className={clsx(classes.menuButton, !open && classes.hide)}
      >
        <MenuOpenIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        Kronos システム
      </Typography>
    </Toolbar>
  </AppBar>
      
  );
}
