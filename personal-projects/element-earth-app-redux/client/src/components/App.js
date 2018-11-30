import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser } from "../actions/authActions";

import { Provider } from "react-redux";
import store from "../store";
import reducers from "../reducers";

import Home from "../containers/Home";
import Products from "./Products";
import Faqs from "./Faqs";
import Checkout from "./Checkout";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Social from "./Social";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}

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
                      <Home
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
                      <Login
                        route={this.state.route}
                        routeHandler={this.setRoute.bind(this)}
                        {...props}
                      />
                    );
                  }}
                  path="/login"
                />
                <Route
                  component={props => {
                    return (
                      <Register
                        route={this.state.route}
                        routeHandler={this.setRoute.bind(this)}
                        {...props}
                      />
                    );
                  }}
                  path="/register"
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
