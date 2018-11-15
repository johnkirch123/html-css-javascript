import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { productsList } from "../actions/productActions";
import { bindActionCreators } from "redux";

class ProductsList extends Component {
  render() {
    return this.props.products.map(product => {
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

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ productsList }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
