import { GET_BULLETIN, SERVER_STATUS, STATUS_LIST } from "./type";
import axios from "axios";
import Swal from "sweetalert2";

const RootURL = "http://172.21.110.51:4000";
//const RootURL = 'http://192.168.0.48:4000'
//const RootURL = 'http://localhost:4000'
console.log(window.location.hostname)
const BulletinViewPath = RootURL + "/view/users";
const UserInPath = RootURL + "/status/in/";
const UserOutPath = RootURL + "/status/out/";
const UserLeavePath = RootURL + "/status/leave/";
const UserListStatus = RootURL + "/status/statuslist/";
const UserUpdateOtherStatus = RootURL + "/status/otherstatus";
const ServerStatus = {
  Online: "",
  ServerMessage: "",
};
export const ShowBulletin = (Board_ID) => {
  return async (dispatch) => {
    await axios
      .get(BulletinViewPath, {
        params: {
          boardID: Board_ID,
        },
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=cp932",
        },
      })
      .then((response) => {
        let toarray = Object.assign([{}], response.data[0]);
        if (response.status === 200) {
          if (Object.keys(toarray).length > 0 && !(response.data[0] == null)) { 
            dispatch({ type: GET_BULLETIN, payload: toarray });
            ServerStatus.Online = true;
            ServerStatus.ServerMessage = "";
            let msg = Object.assign({}, ServerStatus);
            dispatch({ type: SERVER_STATUS, payload: msg });
          }
        }
      })
      .catch((err) => {
        ServerStatus.Online = false;
        ServerStatus.ServerMessage = err.message;
        let msg = Object.assign({}, ServerStatus);

        dispatch({ type: SERVER_STATUS, payload: msg });
      });
  };
};
export const ShowStatusList = (Board_ID) => {
  return async (dispatch) => {
    await axios
      .get(UserListStatus, {
        params: {
          boardID: Board_ID,
        },
      })
      .then((response) => {
        let toarray = Object.assign([{}], response.data);
        if (response.status === 200) {
          if (Object.keys(toarray).length > 0 && !(response.data == null)) {
            dispatch({ type: STATUS_LIST, payload: response.data });
          }
        }
      })
      .catch((err) => {
        ServerStatus.Online = false;
        ServerStatus.ServerMessage = err.message;
        let msg = Object.assign({}, ServerStatus);

        dispatch({ type: SERVER_STATUS, payload: msg });
        Swal.fire({
          icon: "error",
          title: "System Error Status Selection Display.",
          text: err.message,
        });
      });
  };
};
export const UpdateUserIn = (UserID) => {
  const params = { idcode: UserID };
  return async (dispatch) => {
    await axios
      .put(UserInPath, params, {
        headers: {
          "Content-type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        //let toarray = Object.assign({}, response.data)
      })
      .catch((err) => {
        ServerStatus.Online = false;
        ServerStatus.ServerMessage = err.message;
        let msg = Object.assign({}, ServerStatus);

        dispatch({ type: SERVER_STATUS, payload: msg });
        Swal.fire({
          icon: "error",
          title: "System Error User In",
          text: err.message,
        });
      });
  };
};

export const UpdateUserOut = (UserID) => {
  const params = { idcode: UserID };

  return async (dispatch) => {
    await axios
      .put(UserOutPath, params, {
        headers: {
          "Content-type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        //let toarray = Object.assign({}, response.data)
      })
      .catch((err) => {
        ServerStatus.Online = false;
        ServerStatus.ServerMessage = err.message;
        let msg = Object.assign({}, ServerStatus);

        dispatch({ type: SERVER_STATUS, payload: msg });
        Swal.fire({
          icon: "error",
          title: "System Error User Out",
          text: err.message,
        });
      });
  };
};

export const UpdateUserLeave = (UserID) => {
  const params = { idcode: UserID };
  return async (dispatch) => {
    await axios
      .put(UserLeavePath, params, {
        headers: {
          "Content-type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        //let toarray = Object.assign({}, response.data)
      })
      .catch((err) => {
        ServerStatus.Online = false;
        ServerStatus.ServerMessage = err.message;
        let msg = Object.assign({}, ServerStatus);

        dispatch({ type: SERVER_STATUS, payload: msg });
        Swal.fire({
          icon: "error",
          title: "System Error User Leave",
          text: err.message,
        });
      });
  };
};

export const UpdateOtherStatus = (StatusOthers) => {
  return async (dispatch) => {
    await axios
      .put(UserUpdateOtherStatus, StatusOthers, {
        headers: {
          "Content-type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        //let toarray = Object.assign({}, response.data)
      })
      .catch((err) => {
        ServerStatus.Online = false;
        ServerStatus.ServerMessage = err.message;
        let msg = Object.assign({}, ServerStatus);

        dispatch({ type: SERVER_STATUS, payload: msg });
        Swal.fire({
          icon: "error",
          title: "System Error Update User Status",
          text: err.message,
        });
      });
  };
};
