import { combineReducers } from "redux";
import apiReducers from "./apiReducers";
import trackReducers from "./trackReducers";
import tracksReducers from "./tracksReducers";

const rootReducer = combineReducers({
  tracks: tracksReducers,
  track: trackReducers,
  isSubmitting: apiReducers,
});

export default rootReducer;
