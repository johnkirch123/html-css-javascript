import React, { Component } from "react";
import ProductsList from "../containers/ProductsList";
import { connect } from "react-redux";
import { getProducts } from "../actions/productActions";
import PropTypes from "prop-types";

class Products extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { routeHandler, products } = this.props;
    return (
      <section className="u-container products u-center-text">
        {this.props.route !== this.props.match.path
          ? routeHandler(this.props.match.path)
          : ""}
        <h1 className="products__heading u-margin-top-medium">Products</h1>
        <div className="products__area">
          <ProductsList products={products} />
        </div>
      </section>
    );
  }
}

Products.propTypes = {
  getProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log("mapstatetoprops", state.products.products);
  return {
    products: state.products.products
  };
};

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
