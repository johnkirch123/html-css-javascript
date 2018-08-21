import { FETCH_CHAMPIONS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CHAMPIONS:
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
  }
  return state;
}
