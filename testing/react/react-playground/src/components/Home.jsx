import React, { Component } from "react";

class Home extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <div className="home">
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default Home;
