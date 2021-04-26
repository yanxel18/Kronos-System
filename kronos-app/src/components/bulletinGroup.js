import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import ComponentStyle from "../components_style/componentstyle";
import { useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import PopUpMenuButton from "../components/popupMenu";
import StatusWindow from "../components/windowstatus";
import { makeStyles } from "@material-ui/core/styles";
export default function ShowBulletinUI() {
  const classes = ComponentStyle();
  let BulletinData = useSelector((state) => state.BulletinState.Bulletin);
  let DivisionGroup = [],
    UserCards = [];
  let DivisionMembers = [];
  let BoardView = [];
  let BoxSize;

  const changeSizeBody = (Val) => {
    const makeCSS = makeStyles(() => ({
      BulletinHolderFixSize: {
        width: "100%",
        minWidth: 660 * Val,
        margin: "0 center",
      },
    }));
    const customSize = makeCSS();
    return customSize.BulletinHolderFixSize;
  };
  DivisionGroup = Array.from(
    new Set(BulletinData.map((groupname) => groupname.grp_name))
  );
  function UserCard(displayname, thiskey, status, location, remarks) {
    return (
      <Card
        key={displayname}
        className={classes.UserCards}
        elevation={1}
        square
      >
        <div className={classes.userContainer}>
          <div className={classes.userAvatarArea}>
            <Avatar component="div" />
          </div>
          <div className={classes.userName}>
            <Typography variant="h4">{displayname}</Typography>
          </div>
          <div className={classes.userLocation}>
            <StatusWindow UserSelectedStatus={{ thiskey, location, remarks }} />
          </div>
          <div className={classes.userStatus}>
            <PopUpMenuButton param={{ thiskey, status }} />
          </div>
        </div>
      </Card>
    );
  }
  function TitleCard(GroupName, ID) {
    return (
      <Card key={ID} className={classes.UserCards} elevation={1} square>
        <div className={classes.userContainer}>
          <div className={classes.userGroupName}>
            <Typography variant="h4">{GroupName} </Typography>
          </div>
          <div className={classes.userGroupLocationName}>
            <Typography variant="h4">行き先</Typography>
          </div>
        </div>
      </Card>
    );
  }
  function CreateGroup() {
    BoxSize = Math.round(12 / DivisionGroup.length);
    for (let y = 0; y < DivisionGroup.length; y++) {
      DivisionMembers = BulletinData.filter(
        (divname) => divname.grp_name === DivisionGroup[y]
      );
      UserCards.push(TitleCard(DivisionGroup[y], y));
      for (let c = 0; c < DivisionMembers.length; c++) {
        UserCards.push(
          UserCard(
            DivisionMembers[c].display_name,
            DivisionMembers[c].id_code,
            DivisionMembers[c].status_name,
            DivisionMembers[c].location_name,
            DivisionMembers[c].remarks
          )
        );
      }
      BoardView.push(DivisionSet(UserCards, DivisionGroup[y]));
      UserCards = [];
    } 
    if (DivisionGroup[0] === undefined) {
      return <React.Fragment>表示するものはありません。</React.Fragment>;
    } else {
      return BoardView;
    }
  } 
  function DivisionSet(BoardTitle, thisKey) {
    return (
      <Grid key={thisKey} container item xs={BoxSize} spacing={3}>
        <div className={classes.UserPerGroup}>{BoardTitle}</div>
      </Grid>
    );
  }

  return (
    <Grid
      container
      spacing={1}
      className={changeSizeBody(DivisionGroup.length)}
      item
      xs={12}
    >
      <CreateGroup />
    </Grid>
  );
}
