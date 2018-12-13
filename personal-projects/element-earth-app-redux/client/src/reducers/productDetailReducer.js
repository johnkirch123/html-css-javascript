import { GET_PRODUCT } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}
