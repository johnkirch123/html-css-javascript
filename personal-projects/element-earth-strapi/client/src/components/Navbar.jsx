import React from "react";
import { NavLink } from "react-router-dom";

import eeLogo from "../img/ee-logo-transparent.svg";

const Navbar = () => (
  <nav className="nav">
    <div className="nav__logo">
      <NavLink to="index.html">
        <img src={eeLogo} alt="Element Earth Logo" />
      </NavLink>
    </div>
    <ul className="nav__list">
      <li className="nav__list--item">
        <NavLink to="about.html" className="nav__list--link">
          FAQs
        </NavLink>
      </li>
      <li className="nav__list--item">
        <NavLink to="products.html" className="nav__list--link">
          Products
        </NavLink>
      </li>
      <li className="nav__list--item">
        <NavLink to="register.html" className="nav__list--link">
          Register
        </NavLink>
      </li>
      <li className="nav__list--item">
        <NavLink to="login.html" className="nav__list--link">
          Login
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
