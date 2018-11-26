import React, { Component } from "react";

class Signin extends Component {
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

  render() {
    const { routeHandler } = this.props;
    return (
      <section className="login u-container u-center-text">
        {this.props.route !== this.props.match.path
          ? routeHandler(this.props.match.path)
          : ""}
        <div className="login__form">
          <form action="#" className="form">
            <h1 className="form__heading">Login</h1>
            <div className="form__group">
              <input
                type="email"
                className="form__input"
                placeholder="Email"
                id="email"
                required
              />
              <label for="email" className="form__label">
                Email
              </label>
            </div>
            <div className="form__group">
              <input
                type="password"
                className="form__input"
                placeholder="Password"
                id="password"
                required
              />
              <label for="password" className="form__label">
                Password
              </label>
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

export default Signin;
