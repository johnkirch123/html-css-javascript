import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

class Register extends Component {
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    console.log(this.state.errors);
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
    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    // this.props.registerUser(newUser);
  }

  render() {
    const { errors } = this.state;
    const { routeHandler } = this.props;

    return (
      <section className="login u-container u-center-text">
        {this.props.route !== this.props.match.path
          ? routeHandler(this.props.match.path)
          : ""}
        <div className="login__form">
          <form onSubmit={this.onSubmit} className="form">
            <h1 className="form__heading">Sign Up</h1>
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
              {errors.password2 && (
                <div className={{ color: "red" }}>{errors.password2}</div>
              )}
              <label className="form__label">Re-enter Password</label>
            </div>
            <div className="form__group">
              <button className="btn btn--green">Register</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
