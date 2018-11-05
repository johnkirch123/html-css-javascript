import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {
    backgroundColor: ""
  };
  render() {
    return (
      <header className="header">
        <ul className="header__links">
          <li className="header__links--link">
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="header__links--link">
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li className="header__links--link">
            <NavLink activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
