import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productDetailReducer from "./productDetailReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  errors: errorReducer,
  product: productDetailReducer
});

export default rootReducer;
