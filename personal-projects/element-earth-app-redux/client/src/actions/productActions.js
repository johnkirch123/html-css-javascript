import axios from "axios";

import { GET_ERRORS, GET_PRODUCT, GET_PRODUCTS } from "./types";

export const getProducts = () => dispatch => {
  axios
    .get("api/products")
    .then(res => {
      const { data } = res;
      dispatch(setProductList(data));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getProductById = id => dispatch => {
  axios
    .get(`api/products/${id}`)
    .then(res => {
      dispatch({
        type: GET_PRODUCT,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("productActions: ", err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const setProductList = data => {
  return {
    type: GET_PRODUCTS,
    payload: data
  };
};

export const addProduct = (productData, history) => dispatch => {
  axios
    .post("api/products", productData)
    .then(res => history.push("/products"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
