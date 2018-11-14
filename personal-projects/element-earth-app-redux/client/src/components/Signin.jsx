import React, { Component } from "react";

class Signin extends Component {
  render() {
    const { routeHandler } = this.props;
    return (
      <div>
        {this.props.route !== this.props.match.path
          ? routeHandler(this.props.match.path)
          : ""}
        Signin
      </div>
    );
  }
}

export default Signin;
