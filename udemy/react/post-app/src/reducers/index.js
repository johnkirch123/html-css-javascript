import { combineReducers } from "redux";
import PostsReduceer from "./reducer_posts";

const rootReducer = combineReducers({
  posts: PostsReduceer
});

export default rootReducer;
