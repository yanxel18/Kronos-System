import { rootReducer } from "../Reducer/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

const composedEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, composedEnhancers);

export default store;
