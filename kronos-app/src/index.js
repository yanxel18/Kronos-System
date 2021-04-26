import React from "react";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import store from "./Store/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
