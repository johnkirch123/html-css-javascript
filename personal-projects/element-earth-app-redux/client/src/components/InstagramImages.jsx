import React, { Component } from "react";

class InstagramImages extends Component {
  constructor() {
    this.state = {
      instagramImages: this.props.images
    }
  }
  render() {
    console.log("instagram images: ", this.props.images);
    let i = 0;
    if (this.props.images === undefined) {
      return <h1>Loading...</h1>;
    } else {
      const { images } = this.state;
      return images.map((image) => {
        return (
          <div className="gallery">
            <figure className={`gallery__item gallery__item--${i+1}`}>
              <a target="_blank" href={image.link}>
                <img src={image.standard_resolution.url} alt="Sass" className="gallery__img" />
              </a>
            </figure>
        </div>);
      });
    }
  }
}

export default InstagramImages;
