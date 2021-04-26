import { combineReducers } from "redux";

import InitialState from "./initialState";
import BulletinState from "./bulletinState";
import BulletinStateVar from "./bulletinStateVar";

export const rootReducer = combineReducers({
  InitialState,
  BulletinState,
  BulletinStateVar,
});
