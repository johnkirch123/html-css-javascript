import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    backgroundColor: ""
  };
  render() {
    return (
      <header className="header">
        <ul className="header__links">
          <li className="header__links--link">
            <Link activeClassName="activeStyle" to="/">
              Home
            </Link>
          </li>
          <li className="header__links--link">
            <Link activeClassName="activeStyle" to="/about">
              About
            </Link>
          </li>
          <li className="header__links--link">
            <Link activeClassName="activeStyle" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
