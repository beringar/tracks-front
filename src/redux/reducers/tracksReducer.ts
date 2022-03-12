import { AnyAction } from "redux";
import { ITrack } from "../../types/ITrack";

import actionTypes from "../actions/actionTypes";

const tracksReducer = (tracksState: ITrack[] = [], action: AnyAction | {}) => {
  let newState;
  switch ((action as AnyAction).type) {
    case actionTypes.loadAlltracks:
      newState = [...(action as AnyAction).payload];
      break;
    default:
      newState = [...tracksState];
  }
  return newState;
};

export default tracksReducer;
