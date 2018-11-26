import React, { Component } from "react";

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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
  }

  render() {
    const { routeHandler } = this.props;
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
                className="form__input"
                placeholder="Email"
                id="email"
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
                id="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <label className="form__label">Password</label>
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

export default Login;
