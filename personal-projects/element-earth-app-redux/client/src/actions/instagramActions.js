import axios from "axios";

import { GET_ERRORS, GET_INSTAGRAM_IMAGES } from "./types";

import instagramApiKey from "../keys/keys";

export const getInstagramImages = () => dispatch => {
  axios
    .get(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${
        instagramApiKey.instagramApiKey
      }`
    )
    .then(res => {
      dispatch({
        type: GET_INSTAGRAM_IMAGES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
