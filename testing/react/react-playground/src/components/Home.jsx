import React, { Component } from "react";

class Home extends Component {
  state = {};

  greeting = () => {
    const div = document.getElementById("greeting");
    div.innerHTML += `Hello ${this.state.firstname}`;
  };

  componentDidMount = () => {
    const { firstname, lastname, age, greeting } = this.props.info;
    this.setState({ firstname, lastname, age, greeting });
  };

  render() {
    const { firstname, lastname, age } = this.state;

    return (
      <div className="home">
        <h1>Home Page</h1>
        {`Hello ${firstname} ${lastname} - age: ${age}`}
        <div id="greeting" />
        <button onClick={this.greeting}>Greeting</button>
      </div>
    );
  }
}

export default Home;
