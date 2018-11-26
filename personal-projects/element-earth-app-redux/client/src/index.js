import React, { Component } from "react";
import ReactDOM from "react-dom";
import Root from "./components/App";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();

// Create React App - webpack - hot module reloading.
if (module.hot) {
  module.hot.accept();
}
