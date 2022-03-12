import { combineReducers } from "redux";
import tracksReducer from "./tracksReducer";

const rootReducer = combineReducers({
  tracks: tracksReducer,
});
export default rootReducer;
