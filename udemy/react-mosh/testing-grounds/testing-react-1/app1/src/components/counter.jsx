import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };
  render() {
    return (
      <div className="container bg-light mt-5">
        <span className="numberAmount">{this.state.count}</span>
        <button
          onClick={this.incrementHandler}
          className="btn btn-outline-primary btn-lg btn-block py-2 mt-4"
        >
          Increment
        </button>
      </div>
    );
  }

  incrementHandler() {
    this.setState(() => {
      this.state.count += this.state.count + 1;
    });
  }
}

export default Counter;
