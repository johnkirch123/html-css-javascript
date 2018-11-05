import React, { Component } from "react";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="home">
        {console.log(this.props)}
        <h1>Home Page</h1>
        {`Hello ${this.props.info.firstname}`}
      </div>
    );
  }
}

export default Home;
