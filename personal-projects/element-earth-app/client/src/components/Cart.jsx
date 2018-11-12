import React, { Component } from "react";

class Cart extends Component {
  render() {
    const { routeHandler } = this.props;
    return (
      <div>
        {this.props.route !== this.props.match.path
          ? routeHandler(this.props.match.path)
          : ""}
        Cart
      </div>
    );
  }
}

export default Cart;
