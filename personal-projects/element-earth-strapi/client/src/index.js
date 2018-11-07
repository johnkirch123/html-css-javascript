import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const Root = () => (
  <Router>
    <Switch>
      <Route />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
