import React from "react";
import { NavLink } from "react-router-dom";

import eeLogo from "../img/ee-logo-transparent.svg";

const Navbar = () => (
  <nav className="nav">
    <div className="nav__logo">
      <NavLink to="/">
        <img src={eeLogo} alt="Element Earth Logo" />
      </NavLink>
    </div>
    <ul className="nav__list">
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
        <NavLink to="/signup" className="nav__list--link">
          Register
        </NavLink>
      </li>
      <li className="nav__list--item">
        <NavLink to="/signin" className="nav__list--link">
          Login
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
