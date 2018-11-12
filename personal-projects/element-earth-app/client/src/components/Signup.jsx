import React, { Component } from "react";

class Signup extends Component {
  render() {
    const { routeHandler } = this.props;
    return (
      <div>
        {this.props.route !== this.props.match.path
          ? routeHandler(this.props.match.path)
          : ""}
        Signup
      </div>
    );
  }
}

export default Signup;
