import React, { Component } from "react";

import bg1 from "../img/bg1.jpg";
import bg2 from "../img/bg2.jpg";
import bg3 from "../img/bg3.jpg";
import bg4 from "../img/bg4.jpg";
import bg5 from "../img/bg5.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <ul id="nav__slide" class="nav__slider">
        <li>
          <img src={bg1} alt="Image 1" />
        </li>
        <li>
          <img src={bg2} alt="Image 2" />
        </li>
        <li>
          <img src={bg3} alt="Image 3" />
        </li>
        <li>
          <img src={bg4} alt="Image 4" />
        </li>
        <li>
          <img src={bg5} alt="Image 5" />
        </li>
      </ul>
    );
  }
}

export default App;
