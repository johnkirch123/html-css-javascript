import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/faqs" className="nav__list--link">
          FAQs
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

const BasicNavbar = () => (
  <nav className="navigation">
    <div className="navigation__logo">
      <NavLink to="/">
        <img src={eeLogo} alt="Element Earth Logo" />
      </NavLink>
    </div>
    <ul className="navigation__list">
      <li className="navigation__list--item">
        <NavLink to="/faqs" className="navigation__list--link">
          FAQs
        </NavLink>
      </li>
      <li className="navigation__list--item">
        <NavLink to="/register" className="navigation__list--link">
          Signup
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
        <NavLink to="/faqs" className="navigation__list--link">
          FAQs
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

const FaqsNavbar = () => (
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
        <NavLink to="/faqs" className="navigation__list--link">
          FAQs
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
        <NavLink to="/faqs" className="navigation__list--link">
          FAQs
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
        <NavLink to="/faqs" className="navigation__list--link">
          FAQs
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

class Navbar extends Component {
  updateNavbar = route => {
    switch (this.props.route) {
      case "/":
        return <HomeNavbar />;
      case "/products":
        return <BasicNavbar />;
      case "/login":
        return <LoginNavbar />;
      case "/register":
        return <RegisterNavbar />;
      case "/cart":
        return <CartNavbar />;
      case "/checkout":
        return <CheckoutNavbar />;
      case "/faqs":
        return <FaqsNavbar />;
      default:
        return <HomeNavbar />;
    }
  };

  render() {
    return this.updateNavbar(this.props.route);
    // return this.props.route !== "/" ? <BasicNavbar /> : <HomeNavbar />;
  }
}

export default Navbar;
