import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../actions/authActions";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/products");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }

  // onSubmit(e) {
  //   e.preventDefault();

  //   const user = {
  //     email: this.state.email,
  //     password: this.state.password
  //   };
  //   console.log(user);
  // }

  render() {
    const { routeHandler } = this.props;
    const { errors } = this.state;

    return (
      <section className="login u-container u-center-text">
        {this.props.route !== this.props.match.path
          ? routeHandler(this.props.match.path)
          : ""}
        <div className="login__form">
          <form onSubmit={this.onSubmit} className="form">
            <h1 className="form__heading">Login</h1>
            <div className="form__group">
              <input
                type="email"
                name="email"
                className={classnames("form__input", {
                  error: errors.email
                })}
                placeholder="Email"
                id="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              <label className="form__label">Email</label>
              {errors.password && <div className="errors">{errors.email}</div>}
            </div>
            <div className="form__group">
              <input
                type="password"
                name="password"
                className={classnames("form__input", {
                  error: errors.password
                })}
                placeholder="Password"
                id="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <label className="form__label">Password</label>
              {errors.password && (
                <div className="errors">{errors.password}</div>
              )}
            </div>
            <div className="form__group">
              <button className="btn btn--green">Login</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
