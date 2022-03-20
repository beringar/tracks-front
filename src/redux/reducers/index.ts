import { combineReducers } from "redux";
import apiReducers from "./ApiReducers";
import tracksReducers from "./tracksReducers";

const rootReducer = combineReducers({
  tracks: tracksReducers,
  isSubmitting: apiReducers,
});

export default rootReducer;
