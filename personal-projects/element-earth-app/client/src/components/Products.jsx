import React, { Component } from "react";
import { setNavbar, getNavbar } from "../utils/Utils";
import { setRoute } from "./Navbar";

class Products extends Component {
  render() {
    const { routeHandler } = this.props;
    return (
      <section className="u-container products u-center-text">
        {this.props.route !== this.props.match.path
          ? routeHandler(this.props.match.path)
          : ""}
        <h1 className="products__heading u-margin-top-medium">Products</h1>
        <div className="products__area">
          <div className="products__product">
            <h4 className="products__product--heading">
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
          <div className="products__product">
            <h4 className="products__product--heading">
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
          <div className="products__product">
            <h4 className="products__product--heading">
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
          <div className="products__product">
            <h4 className="products__product--heading">
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
          <div className="products__product">
            <h4 className="products__product--heading">
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
          <div className="products__product">
            <h4 className="products__product--heading">
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
    );
  }
}

export default Products;
