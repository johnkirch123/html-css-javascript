import { combineReducers } from "redux";
import ProductsReducer from "./../components/Products";

const rootReducer = combineReducers({
  products: ProductsReducer
});

export default rootReducer;
