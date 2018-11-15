import React, { Component } from "react";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

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
