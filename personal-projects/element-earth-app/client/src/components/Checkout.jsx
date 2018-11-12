import React, { Component } from "react";

class Checkout extends Component {
  render() {
    const { routeHandler } = this.props;
    return (
      <div>
        {this.props.route !== this.props.match.path
          ? routeHandler(this.props.match.path)
          : ""}
        Checkout
      </div>
    );
  }
}

export default Checkout;
