import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  //   // tags: ["tag1", "tag2", "tag3"]
  // }
  /////////////// make an ajax call if something updates, otherwise don't , efficiency //
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('PrevProps', prevProps);
  //   console.log('PrevState', prevState);
  //   if (prevProps.counter.value !== this.props.counter.value) {
  //     // Ajax call and get new data from the server
  //   }
  // }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }

  render() {
    console.log('Counter - Rendered');
    return (
      <div className="bg-light mt-5">
        <div className="row">
          <div className="col-5">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-outline-primary btn-lg m-2">
              +
            </button>
            <button 
              onClick={() => this.props.onDecrement(this.props.counter)} 
              disabled={this.props.counter.value <= 0}
              className="btn btn-outline-warning btn-lg m-2">
              -
            </button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-outline-danger btn-lg m-2">
              Delete
            </button>
          </div>
        </div>
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
    return (classes += this.props.counter.value <= 0 ? "warning" : "success");
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
