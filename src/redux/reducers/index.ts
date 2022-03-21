import { combineReducers } from "redux";
import apiReducers from "./apiReducers";
import trackReducers from "./trackReducers";
import tracksReducers from "./tracksReducers";
import userReducers from "./userReducers";

const rootReducer = combineReducers({
  tracks: tracksReducers,
  track: trackReducers,
  isSubmitting: apiReducers,
  user: userReducers,
});

export default rootReducer;
