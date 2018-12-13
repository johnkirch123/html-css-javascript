import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProductById } from "../actions/productActions";
import PropTypes from "prop-types";

class ProductDetail extends Component {
  componentDidMount() {
    this.props.getProductById(this.props.match.params.id);
  }
  render() {
    const {
      available,
      count,
      description,
      images,
      modelNumber,
      name,
      price,
      set,
      type
    } = this.props.product;
    const { routeHandler } = this.props;
    return (
      <section className="product u-center-text">
        {this.props.route !== this.props.match.path
          ? routeHandler(this.props.match.path)
          : ""}
        <h1 className="product__heading u-center-text">{name}</h1>
        <div className="product__area">
          <div className="product__image">
            <div className="product__image--main" />
            <div className="product__image--images">
              <div className="product__image--secondary" />
              <div className="product__image--secondary" />
              <div className="product__image--secondary" />
              <div className="product__image--secondary" />
              <div className="product__image--secondary" />
              <div className="product__image--secondary" />
              <div className="product__image--secondary" />
            </div>
          </div>
          <div className="product__info">
            <h1 className="product__info--heading">{modelNumber}</h1>
            <h2 className="product__info--price">${price}</h2>
            <p className="product__info--description">{description}</p>
            <Link to="#" className="u-margin-top-medium">
              View in 3D &rarr;
            </Link>
            <button className="btn">Buy Now!</button>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </section>
    );
  }
}

ProductDetail.propTypes = {
  getProductById: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    product: state.products.product
  };
};

export default connect(
  mapStateToProps,
  { getProductById }
)(ProductDetail);
