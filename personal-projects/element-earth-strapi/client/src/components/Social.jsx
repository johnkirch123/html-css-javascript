import React from "react";
import instagramLogo from "../img/Instagram.png";
import facebookLogo from "../img/Facebook.png";

const Social = () => (
  <div class="social__icons">
    <a
      href="https://www.instagram.com/elementearth3d.climbingholds/"
      target="_blank"
    >
      <img src={instagramLogo} alt="instagram link" />
    </a>
    <a href="https://www.facebook.com/Nicholas3DClimbingHolds" target="_blank">
      <img src={facebookLogo} alt="facebook link" />
    </a>
  </div>
);

export default Social;
