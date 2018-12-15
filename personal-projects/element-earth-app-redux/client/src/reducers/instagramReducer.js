import { GET_INSTAGRAM_IMAGES } from "../actions/types";

const initialState = {
  instagramImages: []
};

export default (state = initialState, action) => {
  // query product endpoint to fill store
  switch (action.type) {
    case GET_INSTAGRAM_IMAGES:
      return {
        ...state,
        instagramImages: action.payload
      };
    default:
      return state;
  }
};