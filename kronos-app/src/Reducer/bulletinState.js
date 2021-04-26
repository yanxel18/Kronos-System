import { GET_BULLETIN, STATUS_LIST } from "../actions/type";

const initialState = {
  Bulletin: [],
  StatusList: [],
};

export default function bulletinStateReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BULLETIN:
      return {
        ...state,
        Bulletin: action.payload,
      };
    case STATUS_LIST:
      return {
        ...state,
        StatusList: action.payload,
      };
    default:
      return state;
  }
}
