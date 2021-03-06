import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setProduct } from "../actions/productActions";

class ProductsList extends Component {
  componentDidMount() {}

  render() {
    if (this.props.products === undefined) {
      return <h1>Loading...</h1>;
    } else {
      const { products } = this.props;
      return products.map(product => {
        return (
          <div key={product._id} className="products__product">
            <h4 className="products__product--heading">{product.name}</h4>
            <div className="featured__right">
              <p>{product.description}</p>
              <Link
                // onClick={this.setProduct}
                to={`/${product._id}`}
                className="featured__products--button"
              >
                View Holds!
              </Link>
            </div>
          </div>
        );
      });
    }
  }
}

export default ProductsList;
