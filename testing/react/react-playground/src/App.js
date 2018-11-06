import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import "./App.css";
import "./css/style.css";

class App extends Component {
  state = {
    firstname: "John",
    lastname: "Kirch",
    age: 38
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Header info={this.state} />
          <Route
            exact
            path="/"
            component={props => <Home {...props} info={this.state} />}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
