import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
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

    this.props.registerUser(newUser, this.props.history);
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
                className={classnames("form__input", {
                  error: errors.username
                })}
                placeholder="Username"
                value={this.state.username}
                onChange={this.onChange}
              />
              <label className="form__label">Username</label>
              {errors.username && (
                <div className="errors">{errors.username}</div>
              )}
            </div>
            <div className="form__group">
              <input
                type="email"
                name="email"
                className={classnames("form__input", {
                  error: errors.email
                })}
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChange}
              />
              <label className="form__label">Email</label>
              {errors.email && <div className="errors">{errors.email}</div>}
            </div>
            <div className="form__group">
              <input
                type="password"
                name="password"
                className={classnames("form__input", {
                  error: errors.password
                })}
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <label className="form__label">Password</label>
              {errors.password && (
                <div className="errors">{errors.password}</div>
              )}
            </div>
            <div className="form__group">
              <input
                type="password"
                name="password2"
                className={classnames("form__input", {
                  error: errors.password2
                })}
                placeholder="Re-enter Password"
                value={this.state.password2}
                onChange={this.onChange}
              />
              <label className="form__label">Re-enter Password</label>
              {errors.password2 && (
                <div className="errors">{errors.password2}</div>
              )}
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
)(withRouter(Register));
