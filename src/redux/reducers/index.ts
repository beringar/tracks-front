import { combineReducers } from "redux";
import tracksReducers from "./tracksReducers";

const rootReducer = combineReducers({
  tracks: tracksReducers,
});

export default rootReducer;
