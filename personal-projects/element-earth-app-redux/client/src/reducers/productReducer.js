import { GET_PRODUCTS } from "../actions/types";

const initialState = {
  products: []
};

export default (state = initialState, action) => {
  // query product endpoint to fill store
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};
