import React from "react";

export default function ProductDetail() {
  return (
    <section className="product u-center-text">
      <h1 className="product__heading u-center-text">Product Detail</h1>
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
          <h1 className="product__info--heading">Product Detail Information</h1>
          <h2 className="product__info--price">$45.00</h2>
          <p className="product__info--description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta non
            aliquam alias a optio minima delectus provident aspernatur eaque
            mollitia impedit consequatur pariatur eligendi commodi nisi dolore,
            ea nihil veritatis odit molestiae adipisci est neque? Autem
            explicabo facilis temporibus molestiae officia placeat dolorum,
            soluta unde eveniet iure! Ratione, non atque?
          </p>
          <a href="#" className="u-margin-top-medium">
            View in 3D &rarr;
          </a>
          <button className="btn">Buy Now!</button>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </section>
  );
}
