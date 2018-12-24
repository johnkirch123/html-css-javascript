const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProductInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.type = !isEmpty(data.type) ? data.type : "";
  data.set = !isEmpty(data.set) ? data.set : "";
  data.modelNumber = !isEmpty(data.modelNumber) ? data.modelNumber : "";
  data.available = !isEmpty(data.available) ? data.available : "";
  data.count = !isEmpty(data.count) ? data.count : "";
  data.image = !isEmpty(data.image) ? data.image : "";
  data.thumbnail = !isEmpty(data.thumbnail) ? data.thumbnail : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2-30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "Price is Invalid";
  }

  if (Validator.isEmpty(data.type)) {
    errors.type = "Type field is required";
  }

  if (Validator.isEmpty(data.set)) {
    errors.set = "Set field is required";
  }

  if (Validator.isEmpty(data.modelNumber)) {
    errors.modelNumber = "Model Number field is required";
  }

  if (Validator.isEmpty(data.available)) {
    errors.available = "Available field is required";
  }

  if (Validator.isEmpty(data.count)) {
    errors.count = "Count field is required";
  }

  if (Validator.isEmpty(data.image)) {
    errors.image = "Image field is required";
  }

  if (Validator.isEmpty(data.thumbnail)) {
    errors.thumbnail = "Thumbnail field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
