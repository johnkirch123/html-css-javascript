import axios from "axios";

import { GET_ERRORS } from "./types";

export const productsList = () => dispatch => {
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

export const setProductList = data => {
  return {
    type: "GET_PRODUCTS",
    payload: data
  };
};
