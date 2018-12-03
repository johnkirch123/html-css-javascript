import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { productsList } from "../actions/productActions";
import PropTypes from "prop-types";

class ProductsList extends Component {
  state = {
    products: []
  };

  componentWillMount() {
    this.props.productsList();
    this.setState({ products: this.props.products });
    console.log("products", this.state.products);
  }
  render() {
    const { products } = this.state;
    return products.map(product => {
      return (
        <div className="products__product">
          <h4 className="products__product--heading">{product.name}</h4>
          <div className="featured__right">
            <p>{product.description}</p>
            <Link to={"Product-detail"} className="featured__products--button">
              Buy Now!
            </Link>
          </div>
        </div>
      );
    });
  }
}

ProductsList.propTypes = {
  productsList: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log("Mstp", state.products.products);
  return {
    products: state.products.products
  };
};

export default connect(
  mapStateToProps,
  { productsList }
)(ProductsList);
