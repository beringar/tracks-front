import { combineReducers } from "redux";
import apiReducers from "./apiReducers";
import tracksReducers from "./tracksReducers";

const rootReducer = combineReducers({
  tracks: tracksReducers,
  isSubmitting: apiReducers,
});

export default rootReducer;
