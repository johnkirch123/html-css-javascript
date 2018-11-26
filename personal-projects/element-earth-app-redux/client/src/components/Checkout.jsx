import React, { Component } from "react";
import { Link } from "react-router-dom";

class Checkout extends Component {
  render() {
    const { routeHandler } = this.props;
    return (
      <section className="checkout u-container u-center-text">
        {this.props.route !== this.props.match.path
          ? routeHandler(this.props.match.path)
          : ""}
        <div className="checkout__all">
          <div className="checkout__list--sub-total">
            <h1>Sub-total</h1>
            <p className="checkout__list--count">$375</p>
          </div>
          <div className="checkout__list--tax">
            <h1>Tax</h1>
            <p className="checkout__list--tax-amount">$18.64</p>
          </div>
          <div className="checkout__list--total">
            <h1>Total</h1>
            <p className="checkout__list--tot">$393.64</p>
          </div>
          <form className="form" onsubmit="">
            <div className="form__group u-margin-bottom-reset small-height">
              <input
                type="text"
                className="form__input"
                placeholder="Shipping Address"
                required
              />
            </div>
            <div className="form__group u-margin-bottom-reset small-height">
              <input
                type="text"
                className="form__input"
                placeholder="Postal Code"
                required
              />
            </div>
            <div className="form__group u-margin-bottom-reset small-height">
              <input
                type="text"
                className="form__input"
                placeholder="City"
                required
              />
            </div>
            <div className="form__group u-margin-bottom-reset small-height">
              <input
                type="email"
                className="form__input"
                placeholder="Confirmation Email Address"
                required
              />
            </div>
            <div className="form__group u-margin-bottom-reset small-height">
              <input
                type="text"
                className="form__input"
                placeholder="Card Number"
                required
              />
            </div>
          </form>
          <Link className="btn__checkout" to="/checkout">
            Checkout
          </Link>
        </div>
      </section>
    );
  }
}

export default Checkout;
