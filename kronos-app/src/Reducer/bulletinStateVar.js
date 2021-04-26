import {
  CHANGE_STATUS_FLAG,
  STATUS_IN,
  USER_SELECTED_STATUS,
  SERVER_STATUS,
  STATUS_SELECT,
  BOARDSET,
} from "../actions/type";

const initialState = {
  UserSelected: false,
  ChangeStatusMsg: "",
  ServerStatus: {
    Online: "",
    ServerMessage: "",
  },
  UserSelectedStatus: {
    locations: "",
    remarks: "",
    thiskey: "",
  },
  SelectedStatus: {
    userid: "",
    locationid: "",
    location: "",
    remarks: "",
  },
  BoardID: "",
};

export default function bulletinStateVar(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STATUS_FLAG:
      return {
        ...state,
        UserSelected: action.payload,
      };
    case STATUS_IN:
      return {
        ...state,
        ChangeStatusMsg: action.payload,
      };
    case SERVER_STATUS:
      return {
        ...state,
        ServerStatus: action.payload,
      };
    case USER_SELECTED_STATUS:
      return {
        ...state,
        UserSelectedStatus: action.payload,
      };
    case STATUS_SELECT: {
      return {
        ...state,
        SelectedStatus: action.payload,
      };
    }
    case BOARDSET: {
      return {
        ...state,
        BoardID: action.payload,
      };
    }
    default:
      return state;
  }
}
