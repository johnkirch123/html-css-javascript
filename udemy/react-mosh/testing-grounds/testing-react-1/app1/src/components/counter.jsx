import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  //   // tags: ["tag1", "tag2", "tag3"]
  // }

  render() {
    return (
      <div className="container bg-light mt-5">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-outline-primary btn-lg btn-block py-2 mt-4">
          Increment
        </button>
        <button 
          onClick={() => this.props.onDecrement(this.props.counter)} 
          className="btn btn-outline-warning btn-lg btn-block py-2 mt-4">
          Decrement
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-outline-danger btn-lg btn-block py-2 mt-4">
          Delete
        </button>
      </div>
    );
  }

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // }

  // handleDecrement = () => {
  //   this.setState({ value: this.state.value - 1 });
  // }

  getBadgeClasses() {
    let classes = "numberAmount badge mb-4 badge-";
    return (classes += this.props.counter.value < 0 ? "warning" : "success");
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

}

export default Counter;


/*{ <ul>
  {this.state.tags.map(tag => (
    <li key={tag}>{tag}</li>
  ))}
</ul>} */
