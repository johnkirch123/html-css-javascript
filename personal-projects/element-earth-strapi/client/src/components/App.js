import React, { Component } from "react";

import bg1 from "../img/bg1.jpg";
import bg2 from "../img/bg2.jpg";
import bg3 from "../img/bg3.jpg";
import bg4 from "../img/bg4.jpg";
import bg5 from "../img/bg5.jpg";

import sass from "../img/sass.svg";
import js from "../img/js.svg";
import css from "../img/css.png";
import git from "../img/git.svg";
import html from "../img/html.svg";
import java from "../img/java.png";
import jquery from "../img/jquery.svg";
import node from "../img/node.svg";
import react from "../img/react.png";
import csharp from "../img/csharp.png";
import ps from "../img/ps.jpg";
import ai from "../img/ai.png";
import python from "../img/python.svg";
import ml from "../img/ml.jpg";
import bootstrap from "../img/bootstrap.svg";
import sql from "../img/sql.png";
import "./App.css";

class App extends Component {
  // currentLocation = () => {
  //   const currentLocation = this.props.location.pathname;
  //   console.log(currentLocation);
  // };
  render() {
    return (
      <React.Fragment>
        <ul id="nav__slide" className="nav__slider">
          <li>
            <img src={bg1} alt="Rock climber with beautiful vista" />
          </li>
          <li>
            <img src={bg2} alt="Rock climber with beautiful vista" />
          </li>
          <li>
            <img src={bg3} alt="Rock climber with beautiful vista" />
          </li>
          <li>
            <img src={bg4} alt="Rock climber with beautiful vista" />
          </li>
          <li>
            <img src={bg5} alt="Rock climber with beautiful vista" />
          </li>
        </ul>
        <section className="featured">
          <div className="featured__box">
            <h1 className="featured__title">Products</h1>
          </div>
          <div className="featured__products">
            <div className="featured__product-1">
              <h4 className="featured__product-1--heading">
                3D Printed Climbing Holds
              </h4>
              <div className="featured__right">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur distinctio necessitatibus pariatur voluptatibus.
                </p>
                <a
                  href="product-detail.html"
                  className="featured__products--button"
                >
                  Buy Now!
                </a>
              </div>
            </div>
            <div className="featured__product-2">
              <h4 className="featured__product-2--heading">
                3D Printed Climbing Holds
              </h4>
              <div className="featured__right">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur distinctio necessitatibus pariatur voluptatibus.
                </p>
                <a
                  href="product-detail.html"
                  className="featured__products--button"
                >
                  Buy Now!
                </a>
              </div>
            </div>
            <div className="featured__product-3">
              <h4 className="featured__product-3--heading">
                3D Printed Climbing Holds
              </h4>
              <div className="featured__right">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur distinctio necessitatibus pariatur voluptatibus.
                </p>
                <a
                  href="product-detail.html"
                  className="featured__products--button"
                >
                  Buy Now!
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img src={sass} alt="Sass" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img src={js} alt="" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img src={css} alt="" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img src={git} alt="" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img src={html} alt="" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img src={java} alt="" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--7">
            <img src={jquery} alt="" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--8">
            <img src={node} alt="" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--9">
            <img src={react} alt="" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--10">
            <img src={csharp} alt="" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--11">
            <img src={ps} alt="" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--12">
            <img src={ai} alt="" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--13">
            <img src={python} alt="" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--14">
            <img src={ml} alt="" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--15">
            <img src={bootstrap} alt="" className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--16">
            <img src={sql} alt="" className="gallery__img" />
          </figure>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
