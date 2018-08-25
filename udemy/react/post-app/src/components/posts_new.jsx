import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          label="Title For Post"
          component={this.renderField}
        />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Post Content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate inputs from values object
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter a categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content please!";
  }
  // If errors is empty, the form is fine to submit
  // If erros has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(PostsNew);
