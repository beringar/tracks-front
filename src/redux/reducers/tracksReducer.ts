import { AnyAction } from "redux";
import { ILoadAllTracksAction } from "../../types/IAction";
import { ITrack } from "../../types/ITrack";
import actionTypes from "../actions/actionTypes";

const tracksReducer = (currentState: ITrack[] | [] = [], action: AnyAction) => {
  let newState;
  switch (action.type) {
    case actionTypes.loadAllTracks:
      if ((action as ILoadAllTracksAction).tracks) {
        newState = [...(action as ILoadAllTracksAction).tracks];
      } else {
        newState = [...currentState];
      }
      break;
    default:
      newState = [...currentState];
  }
  return newState;
};

export default tracksReducer;
