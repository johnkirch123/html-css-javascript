import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };
  render() {
    return (
      <div className="container bg-light mt-5">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-outline-primary btn-lg btn-block py-2 mt-4">
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "numberAmount badge mb-4 badge-";
    return (classes += this.state.count === 0 ? "warining" : "primary");
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
