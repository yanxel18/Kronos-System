import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"; 
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from '@material-ui/icons/Home';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import PlaceIcon from '@material-ui/icons/Place';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import MainStyle from '../components_style/mainstyle';
import MainContent from '../components_main/homeMenuGrid'; 
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
    <div className={classes.root}>
      <CssBaseline />
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
      <Drawer
        variant="permanent"
        className={clsx(
          classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
          
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}

        onMouseOver={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
      >
        <Toolbar />
        <div className={classes.drawerContainer} elevation={3}>
          <List>
          <ListItem button className={classes.MenuItem}>
              <ListItemIcon>
                {" "}
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="ホームページ" />
            </ListItem>
            <ListItem button className={classes.MenuItem}>
              <ListItemIcon>
                {" "}
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemText primary="掲示板会員登録" />
            </ListItem>
            <ListItem button className={classes.MenuItem}>
              <ListItemIcon>
                {" "}
                <ViewModuleIcon />
              </ListItemIcon>
              <ListItemText primary="掲示板作成" />
            </ListItem>
            <ListItem button className={classes.MenuItem}>
              <ListItemIcon>
                {" "}
                <EditAttributesIcon />
              </ListItemIcon>
              <ListItemText primary="掲示板会員編集" />
            </ListItem>
            <ListItem button className={classes.MenuItem}>
              <ListItemIcon>
                {" "}
                <PlaceIcon />
              </ListItemIcon>
              <ListItemText primary="先場所登録" />
            </ListItem>
          </List>
          <Divider />
 
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
 <MainContent/>
 
      </main>
    </div>
  );
}
