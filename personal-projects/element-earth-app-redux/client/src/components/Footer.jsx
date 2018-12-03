import React from "react";

import facebook from "../img/Facebook.png";
import instagram from "../img/Instagram.png";

const Footer = route => (
  <footer
    className={
      window.innerHeight < document.body.clientHeight + 60
        ? "footer__base"
        : "footer"
    }
  >
    <div className="footer__contact">
      <div className="footer__contact--address">
        <p>Element Earth, Inc.</p>
        <p>123 Main Street</p>
        <p>Fort Collins, CO 80525</p>
      </div>
      <div className="footer__contact--info">
        <p>Nicholas Diederich - Owner</p>
        <p>970-555-5555</p>
        <a
          href="http://www.elementearth3d.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </div>
    </div>
    <div className="footer__social">
      <a
        href="https://www.instagram.com/elementearth3d.climbingholds/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} alt="instagram link" />
      </a>
      <a
        href="https://www.facebook.com/Nicholas3DClimbingHolds"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebook} alt="facebook link" />
      </a>
    </div>
  </footer>
);

export default Footer;
