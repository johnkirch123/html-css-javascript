import React, { Component } from "react";

import { connect } from "react-redux";
import axios from "axios";
import { registerUser } from "../actions/authActions";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser);
    // axios
    //   .post("/api/users/register", newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    const { errors } = this.state;
    const { routeHandler } = this.props;

    return (
      <div>
        {this.props.route !== this.props.match.path
          ? routeHandler(this.props.match.path)
          : ""}
        <section className="login u-container u-center-text">
          <div className="login__form">
            <form onSubmit={this.onSubmit} className="form">
              <h1 className="form__heading">Register</h1>
              <div className="form__group">
                <input
                  type="username"
                  name="username"
                  className="form__input"
                  placeholder="Username"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <label className="form__label">Username</label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  name="email"
                  className="form__input"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <label className="form__label">Email</label>
              </div>
              <div className="form__group">
                <input
                  type="password"
                  name="password"
                  className="form__input"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <label className="form__label">Password</label>
              </div>
              <div className="form__group">
                <input
                  type="password"
                  name="password2"
                  className="form__input"
                  placeholder="Re-enter Password"
                  value={this.state.password2}
                  onChange={this.onChange}
                />
                <label className="form__label">Re-enter Password</label>
              </div>
              <div className="form__group">
                <button className="btn btn--green">Register</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser }
)(Signup);
