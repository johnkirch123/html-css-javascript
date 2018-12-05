import React, { Component } from "react";
import ProductsList from "../containers/ProductsList";

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
          <ProductsList />
          {/* This is the products list */}
        </div>
      </section>
    );
  }
}

export default Products;
