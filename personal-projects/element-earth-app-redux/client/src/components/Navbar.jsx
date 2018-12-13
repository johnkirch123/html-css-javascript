import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

import eeLogo from "../img/ee-logo-transparent.svg";

const HomeNavbar = () => (
  <nav className="nav">
    <div className="nav__logo">
      <NavLink to="/">
        <img src={eeLogo} alt="Element Earth Logo" />
      </NavLink>
    </div>
    <ul className="nav__list">
      <li className="nav__list--item">
        <i className="fas fa-shopping-cart fa-2x" />
        <NavLink to="/cart" className="nav__list--link">
          Cart
        </NavLink>
      </li>
      <li className="nav__list--item">
        <NavLink to="/products" className="nav__list--link">
          Products
        </NavLink>
      </li>
      <li className="nav__list--item">
        <NavLink to="/register" className="nav__list--link">
          Signup
        </NavLink>
      </li>
      <li className="nav__list--item">
        <NavLink to="/login" className="nav__list--link">
          Login
        </NavLink>
      </li>
    </ul>
  </nav>
);

const LoginNavbar = () => (
  <nav className="navigation">
    <div className="navigation__logo">
      <NavLink to="/">
        <img src={eeLogo} alt="Element Earth Logo" />
      </NavLink>
    </div>
    <ul className="navigation__list">
      <li className="nav__list--item">
        <i className="fas fa-shopping-cart fa-2x" />
        <NavLink to="/cart" className="nav__list--link">
          Cart
        </NavLink>
      </li>
      <li className="navigation__list--item">
        <NavLink to="/products" className="navigation__list--link">
          Products
        </NavLink>
      </li>
      <li className="navigation__list--item">
        <NavLink to="/register" className="navigation__list--link">
          Signup
        </NavLink>
      </li>
    </ul>
  </nav>
);

const ProductsNavbar = () => (
  <nav className="navigation">
    <div className="navigation__logo">
      <NavLink to="/">
        <img src={eeLogo} alt="Element Earth Logo" />
      </NavLink>
    </div>
    <ul className="navigation__list">
      <li className="nav__list--item">
        <i className="fas fa-shopping-cart fa-2x" />
        <NavLink to="/cart" className="nav__list--link">
          Cart
        </NavLink>
      </li>
      <li className="navigation__list--item">
        <NavLink to="/login" className="navigation__list--link">
          Login
        </NavLink>
      </li>
      <li className="navigation__list--item">
        <NavLink to="/register" className="navigation__list--link">
          Signup
        </NavLink>
      </li>
    </ul>
  </nav>
);

const ProductDetailNavbar = () => (
  <nav className="navigation">
    <div className="navigation__logo">
      <NavLink to="/">
        <img src={eeLogo} alt="Element Earth Logo" />
      </NavLink>
    </div>
    <ul className="navigation__list">
      <li className="nav__list--item">
        <i className="fas fa-shopping-cart fa-2x" />
        <NavLink to="/cart" className="nav__list--link">
          Cart
        </NavLink>
      </li>
      <li className="navigation__list--item">
        <NavLink to="/products" className="navigation__list--link">
          Products
        </NavLink>
      </li>
      <li className="navigation__list--item">
        <NavLink to="/login" className="navigation__list--link">
          Login
        </NavLink>
      </li>
      <li className="navigation__list--item">
        <NavLink to="/register" className="navigation__list--link">
          Signup
        </NavLink>
      </li>
    </ul>
  </nav>
);

const RegisterNavbar = () => (
  <nav className="navigation">
    <div className="navigation__logo">
      <NavLink to="/">
        <img src={eeLogo} alt="Element Earth Logo" />
      </NavLink>
    </div>
    <ul className="navigation__list">
      <li className="nav__list--item">
        <i className="fas fa-shopping-cart fa-2x" />
        <NavLink to="/cart" className="nav__list--link">
          Cart
        </NavLink>
      </li>
      <li className="navigation__list--item">
        <NavLink to="/products" className="navigation__list--link">
          Products
        </NavLink>
      </li>
      <li className="navigation__list--item">
        <NavLink to="/login" className="navigation__list--link">
          Login
        </NavLink>
      </li>
    </ul>
  </nav>
);

const CartNavbar = () => (
  <nav className="navigation">
    <div className="navigation__logo">
      <NavLink to="/">
        <img src={eeLogo} alt="Element Earth Logo" />
      </NavLink>
    </div>
    <ul className="navigation__list">
      <li className="navigation__list--item">
        <NavLink to="/products" className="navigation__list--link">
          Products
        </NavLink>
      </li>
      <li className="navigation__list--item">
        <NavLink to="/login" className="navigation__list--link">
          Login
        </NavLink>
      </li>
      <li className="navigation__list--item">
        <NavLink to="/register" className="navigation__list--link">
          Register
        </NavLink>
      </li>
    </ul>
  </nav>
);

const CheckoutNavbar = () => (
  <nav className="navigation">
    <div className="navigation__logo">
      <NavLink to="/">
        <img src={eeLogo} alt="Element Earth Logo" />
      </NavLink>
    </div>
    <ul className="navigation__list">
      <li className="nav__list--item">
        <i className="fas fa-shopping-cart fa-2x" />
        <NavLink to="/cart" className="nav__list--link">
          Cart
        </NavLink>
      </li>
      <li className="navigation__list--item">
        <NavLink to="/products" className="navigation__list--link">
          Products
        </NavLink>
      </li>
      <li className="navigation__list--item">
        <NavLink to="/login" className="navigation__list--link">
          Login
        </NavLink>
      </li>
    </ul>
  </nav>
);

const AuthenticatedNavbar = props => {
  const { user } = props;
  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
  };

  return (
    <nav className="navigation sticky">
      <div className="navigation__logo">
        <NavLink to="/">
          <img src={eeLogo} alt="Element Earth Logo" />
        </NavLink>
      </div>
      <ul className="navigation__list">
        <li className="nav__list--item">
          <i className="fas fa-shopping-cart fa-2x" />
          <NavLink to="/cart" className="nav__list--link">
            Cart
          </NavLink>
        </li>
        <li className="navigation__list--item nav__products">
          <NavLink to="/products" className="navigation__list--link">
            Products
          </NavLink>
        </li>
        <li className="navigation__list--item">
          <a
            href="/"
            onClick={onLogoutClick}
            className="navigation__list--link"
          >
            <img
              src={user.avatar}
              alt={user.name}
              title="You must have a Gravatar connected to your email to display an image"
            />
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

class Navbar extends Component {
  updateNavbar = route => {
    const { isAuthenticated, user } = this.props.auth;
    if (isAuthenticated) {
      console.log("isAuthenticated", isAuthenticated);
      return (
        <AuthenticatedNavbar user={user} logoutUser={this.props.logoutUser} />
      );
    }
    console.log("update Navbar: ", route);
    switch (this.props.route) {
      case "/":
        return <HomeNavbar />;
      case "/login":
        return <LoginNavbar />;
      case "/register":
        return <RegisterNavbar />;
      case "/cart":
        return <CartNavbar />;
      case "/checkout":
        return <CheckoutNavbar />;
      case "/products":
        return <ProductsNavbar />;
      case "/:id":
        return <ProductDetailNavbar />;
      default:
        return <HomeNavbar />;
    }
  };

  render() {
    return this.updateNavbar(this.props.route);
    // return this.props.route !== "/" ? <BasicNavbar /> : <HomeNavbar />;
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
