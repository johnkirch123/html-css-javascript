import { combineReducers } from "redux";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import instagramReducer from "./instagramReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  instagramImages: instagramReducer,
  errors: errorReducer
});

export default rootReducer;
