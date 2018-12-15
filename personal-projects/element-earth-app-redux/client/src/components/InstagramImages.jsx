import React, { Component } from "react";

class InstagramImages extends Component {
  render() {
    let i = -1;
    if (this.props.images === undefined) {
      return <h1>Loading...</h1>;
    } else {
      const { images } = this.props;
      return images.map(image => {
        ++i;
        if (i >= 17) return null;
        return (
          <figure className={`gallery__item gallery__item--${i + 1}`}>
            <a target="_blank" href={image.link}>
              <img
                src={image.images.standard_resolution.url}
                alt="Sass"
                className="gallery__img"
              />
            </a>
          </figure>
        );
      });
    }
  }
}

export default InstagramImages;
