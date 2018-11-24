import { combineReducers } from "redux";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  errors: errorReducer
});

export default rootReducer;
