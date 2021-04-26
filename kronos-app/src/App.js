import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Viewing from "./components_monitoring/viewing";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainMenu from "./components_main/main";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <CssBaseline />
        <main>
          <Switch>
            <Redirect exact from="/" to="/main" />
            <Route exact path="/main" component={MainMenu} />
            <Route exact path="/Bulletin/:boardID/" component={Viewing} />
            <Route
              render={() => <h1>Error 404: ページが見つかりませんでした。</h1>}
            />
          </Switch>
        </main>
      </Router>
    </React.Fragment>
  );
}
