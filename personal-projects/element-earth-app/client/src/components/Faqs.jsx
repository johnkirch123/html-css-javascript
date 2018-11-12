import React, { Component } from "react";

class Faqs extends Component {
  render() {
    const { routeHandler } = this.props;
    return (
      <div>
        {this.props.route !== this.props.match.path
          ? routeHandler(this.props.match.path)
          : ""}
        Faqs
      </div>
    );
  }
}

export default Faqs;
