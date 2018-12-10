import axios from "axios";

import { GET_ERRORS } from "./types";

export const getInstagramImages = () => dispatch => {
  axios
    .get("api/instagram")
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
