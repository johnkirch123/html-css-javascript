import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import { addProduct } from "../actions/productActions";
import axios from "axios";

class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      price: "",
      type: "",
      set: "",
      modelNumber: "",
      available: "",
      count: "",
      image: "",
      thumbnail: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onImageChange(e) {
    this.setState({ [e.target.name]: e.target.files[0].name });

    axios.post();
  }

  onSubmit(e) {
    e.preventDefault();
    const newProduct = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      type: this.state.type,
      set: this.state.set,
      modelNumber: this.state.modelNumber,
      available: this.state.available,
      count: this.state.count,
      image: this.state.image,
      thumbnail: this.state.thumbnail
    };

    this.props.addProduct(newProduct, this.props.history);
  }

  render() {
    const { errors } = this.state;
    const { routeHandler } = this.props;
    return (
      <section className="login u-container u-center-text">
        {this.props.route !== this.props.match.path
          ? routeHandler(this.props.match.path)
          : ""}
        <div className="login__form">
          <form
            onSubmit={this.onSubmit}
            encType="multipart/form-data"
            className="form"
          >
            <h1 className="form__heading">Add New Item</h1>
            <div className="form__group">
              <input
                type="name"
                name="name"
                className={classnames("form__input", {
                  error: errors.name
                })}
                placeholder="Name"
                value={this.state.name}
                onChange={this.onChange}
              />
              <label className="form__label">Name</label>
              {errors.name && <div className="errors">{errors.name}</div>}
            </div>
            <div className="form__group">
              <input
                type="description"
                name="description"
                className={classnames("form__input", {
                  error: errors.description
                })}
                placeholder="Description"
                value={this.state.description}
                onChange={this.onChange}
              />
              <label className="form__label">Description</label>
              {errors.description && (
                <div className="errors">{errors.description}</div>
              )}
            </div>
            <div className="form__group">
              <input
                type="price"
                name="price"
                className={classnames("form__input", {
                  error: errors.price
                })}
                placeholder="Price"
                value={this.state.price}
                onChange={this.onChange}
              />
              <label className="form__label">Price</label>
              {errors.price && <div className="errors">{errors.price}</div>}
            </div>
            <div className="form__group">
              <input
                type="type"
                name="type"
                className={classnames("form__input", {
                  error: errors.type
                })}
                placeholder="Type"
                value={this.state.type}
                onChange={this.onChange}
              />
              <label className="form__label">Type</label>
              {errors.type && <div className="errors">{errors.type}</div>}
            </div>
            <div className="form__group">
              <input
                type="set"
                name="set"
                className={classnames("form__input", {
                  error: errors.set
                })}
                placeholder="Set"
                value={this.state.set}
                onChange={this.onChange}
              />
              <label className="form__label">Set</label>
              {errors.set && <div className="errors">{errors.set}</div>}
            </div>
            <div className="form__group">
              <input
                type="modelNumber"
                name="modelNumber"
                className={classnames("form__input", {
                  error: errors.modelNumber
                })}
                placeholder="Model Number"
                value={this.state.modelNumber}
                onChange={this.onChange}
              />
              <label className="form__label">Model Number</label>
              {errors.modelNumber && (
                <div className="errors">{errors.modelNumber}</div>
              )}
            </div>
            <div className="form__group">
              <input
                type="available"
                name="available"
                className={classnames("form__input", {
                  error: errors.available
                })}
                placeholder="Available"
                value={this.state.available}
                onChange={this.onChange}
              />
              <label className="form__label">Available</label>
              {errors.available && (
                <div className="errors">{errors.available}</div>
              )}
            </div>
            <div className="form__group">
              <input
                type="count"
                name="count"
                className={classnames("form__input", {
                  error: errors.count
                })}
                placeholder="Count"
                value={this.state.count}
                onChange={this.onChange}
              />
              <label className="form__label">Count</label>
              {errors.count && <div className="errors">{errors.count}</div>}
            </div>
            <div className="form__group">
              <input
                type="file"
                name="image"
                className={classnames("form__input", {
                  error: errors.image
                })}
                placeholder="Images"
                value={this.state.image}
                onChange={this.onImageChange}
              />
              {errors.image && <div className="errors">{errors.image}</div>}
              <label className="form__label">Image</label>
              <input
                type="file"
                name="thumbnail"
                className={classnames("form__input", {
                  error: errors.thumbnail
                })}
                placeholder="Thumbnail"
                value={this.state.thumbnail}
                onChange={this.onImageChange}
              />
              {errors.thumbnail && (
                <div className="errors">{errors.thumbnail}</div>
              )}
              <label className="form__label">Thumbnail</label>
            </div>
            <div className="form__group">
              <button className="btn btn--green u-margin-bottom-big">
                Add New Product
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addProduct }
)(withRouter(AddProduct));
