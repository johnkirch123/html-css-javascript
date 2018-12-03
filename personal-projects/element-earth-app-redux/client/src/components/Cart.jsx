import React, { Component } from "react";
import { Link } from "react-router-dom";

import image1 from "../img/product-1.jpg";

class Cart extends Component {
  render() {
    const { routeHandler } = this.props;
    return (
      <section className="cart u-center-text">
        {this.props.route !== this.props.match.path
          ? routeHandler(this.props.match.path)
          : ""}
        <h1 className="cart__header">Cart</h1>
        <div className="cart__area">
          <div className="cart__items">
            <div className="cart__item">
              <div className="cart__item--image">
                <img src={image1} alt="product 1 image" />
              </div>
              <div className="cart__item--info">
                <div className="cart__item--head">Product 1</div>
                <div className="cart__input">
                  <h3>Count:</h3>
                  <input className="cart__count" type="text" placeholder="3" />
                </div>
                <div className="cart__item--price">$75</div>
                <div className="cart__item--description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores quia harum autem suscipit nisi mollitia optio quae
                  error.
                </div>
                <button className="btn-danger">Delete</button>
              </div>
            </div>
            <div className="cart__item">
              <div className="cart__item--image">
                <img src={image1} alt="product 1 image" />
              </div>
              <div className="cart__item--info">
                <div className="cart__item--head">Product 1</div>
                <div className="cart__input">
                  <h3>Count:</h3>
                  <input className="cart__count" type="text" placeholder="3" />
                </div>
                <div className="cart__item--price">$75</div>
                <div className="cart__item--description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores quia harum autem suscipit nisi mollitia optio quae
                  error.
                </div>
                <button className="btn-danger">Delete</button>
              </div>
            </div>
            <div className="cart__item">
              <div className="cart__item--image">
                <img src={image1} alt="product 1 image" />
              </div>
              <div className="cart__item--info">
                <div className="cart__item--head">Product 1</div>
                <div className="cart__input">
                  <h3>Count:</h3>
                  <input className="cart__count" type="text" placeholder="3" />
                </div>
                <div className="cart__item--price">$75</div>
                <div className="cart__item--description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores quia harum autem suscipit nisi mollitia optio quae
                  error.
                </div>
                <button className="btn-danger">Delete</button>
              </div>
            </div>
          </div>
          <div className="cart__list">
            <div className="cart__list--sub-total">
              <h1>Sub-total</h1>
              <p className="cart__list--count">$375</p>
            </div>
            <div className="cart__list--tax">
              <h1>Tax</h1>
              <p className="cart__list--tax-amount">$18.64</p>
            </div>
            <div className="cart__list--total">
              <h1>Total</h1>
              <p className="cart__list--tot">$393.64</p>
            </div>
            <Link className="btn" to="/checkout">
              Checkout
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
