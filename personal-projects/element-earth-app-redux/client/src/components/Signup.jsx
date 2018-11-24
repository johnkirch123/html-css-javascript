import React, { Component } from "react";

import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.name });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    const { errors } = this.state;
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

export default connect()(Signup);
