import React, { Component } from "react";

class Home extends Component {
  state = {};

  componentDidMount = () => {
    const { firstname, lastname, age, greeting } = this.props.info;
    this.setState({ firstname, lastname, age, greeting });
  };

  render() {
    const { firstname, lastname, age, greeting } = this.state;

    return (
      <div className="home">
        <h1>Home Page</h1>
        {`Hello ${firstname} ${lastname} - age: ${age}`}
      </div>
    );
  }
}

export default Home;
