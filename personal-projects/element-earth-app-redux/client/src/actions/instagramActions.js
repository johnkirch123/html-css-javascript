import axios from "axios";

import { GET_ERRORS } from "./types";

import instagramApiKey from "../keys/keys";

export const getInstagramImages = () => dispatch => {
  axios
    .get(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${instagramApiKey.instagramApiKey}`
    )
    .then(res => {
      console.log(res.data.data);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
