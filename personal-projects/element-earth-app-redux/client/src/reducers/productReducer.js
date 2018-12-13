import { GET_PRODUCTS, GET_PRODUCT } from "../actions/types";

const initialState = {
  products: [],
  product: {}
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
        prroduct: action.payload
      };
    default:
      return state;
  }
};
