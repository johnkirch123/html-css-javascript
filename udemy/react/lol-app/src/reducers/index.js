import { combineReducers } from "redux";
import ChampionReducer from "./reducer_champion";

const rootReducer = combineReducers({
  champion: ChampionReducer
});

export default rootReducer;
