import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import reducers from "./reducers";

import App from "./components/App";
import Products from "./components/Products";
import Faqs from "./components/Faqs";
import Checkout from "./components/Checkout";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";

import * as serviceWorker from "./serviceWorker";

const container = "container";

class Root extends Component {
  state = {
    route: ""
  };

  setRoute = route => {
    console.log(route);
    this.setState({ route });
  };
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <div className={container}>
              <Navbar route={this.state.route} />
              <Social />
              <Switch>
                <Route
                  component={props => {
                    return (
                      <App
                        route={this.state.route}
                        routeHandler={this.setRoute.bind(this)}
                        {...props}
                      />
                    );
                  }}
                  exact
                  path="/"
                />
                <Route
                  component={props => {
                    return (
                      <Signin
                        route={this.state.route}
                        routeHandler={this.setRoute.bind(this)}
                        {...props}
                      />
                    );
                  }}
                  path="/signin"
                />
                <Route
                  component={props => {
                    return (
                      <Signup
                        route={this.state.route}
                        routeHandler={this.setRoute.bind(this)}
                        {...props}
                      />
                    );
                  }}
                  path="/signup"
                />
                <Route
                  component={props => {
                    return (
                      <Checkout
                        route={this.state.route}
                        routeHandler={this.setRoute.bind(this)}
                        {...props}
                      />
                    );
                  }}
                  path="/checkout"
                />
                <Route
                  component={props => {
                    return (
                      <Products
                        route={this.state.route}
                        routeHandler={this.setRoute.bind(this)}
                        {...props}
                      />
                    );
                  }}
                  path="/products"
                />
                <Route
                  component={props => {
                    return (
                      <Faqs
                        route={this.state.route}
                        routeHandler={this.setRoute.bind(this)}
                        {...props}
                      />
                    );
                  }}
                  path="/faqs"
                />
                <Route
                  component={props => {
                    return (
                      <ProductDetail
                        route={this.state.route}
                        routeHandler={this.setRoute.bind(this)}
                        {...props}
                      />
                    );
                  }}
                  path="/product-detail"
                />
                <Route
                  component={props => {
                    return (
                      <Cart
                        route={this.state.route}
                        routeHandler={this.setRoute.bind(this)}
                        {...props}
                      />
                    );
                  }}
                  path="/cart"
                />
                <Route
                  component={props => {
                    return (
                      <Checkout
                        route={this.state.route}
                        routeHandler={this.setRoute.bind(this)}
                        {...props}
                      />
                    );
                  }}
                  path="/checkout"
                />
              </Switch>
            </div>
            <Footer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();

// Create React App - webpack - hot module reloading.
if (module.hot) {
  module.hot.accept();
}
