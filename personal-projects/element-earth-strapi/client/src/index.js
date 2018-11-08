import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./components/App";
import Products from "./components/Products";
import Faqs from "./components/Faqs";
import Checkout from "./components/Checkout";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Social from "./components/Social";

import * as serviceWorker from "./serviceWorker";

let container = "container";
let mainRoute = false;

const Root = () => (
  <Router>
    <React.Fragment>
      <div className={container}>
        <Navbar mainRoute={mainRoute} />
        {console.log(`Main Route: ${mainRoute}`)}
        {console.log(`Container: ${container}`)}
        <Social />
        <Switch>
          <Route component={App} exact path="/" />
          <Route component={Signin} path="/signin" />
          <Route component={Signup} path="/signup" />
          <Route component={Checkout} path="/checkout" />
          <Route component={Products} path="/products" />
          <Route component={Faqs} path="/Faqs" />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();

// Create React App - webpack - hot module reloading.
if (module.hot) {
  module.hot.accept();
}
