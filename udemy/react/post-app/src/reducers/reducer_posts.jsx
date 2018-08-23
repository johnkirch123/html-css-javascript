import { FETCH_POSTS } from "../actions/action_index";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("reducer changing data of store.");
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
