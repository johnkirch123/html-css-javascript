import { GET_PRODUCTS, GET_PRODUCT } from "../actions/types";

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
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
};
