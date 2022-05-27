import { Track } from "../../types/Track";
import actionTypes from "../actions/actionTypes";
import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";

const trackReducers = (track: any = {}, action: AnyAction = { type: "" }) => {
  let newTrack: Track;
  switch (action.type) {
    case HYDRATE:
      newTrack = { ...action.payload.track };
      break;
    case actionTypes.loadTrack:
    case actionTypes.updateTrack:
      newTrack = { ...action.track };
      break;
    default:
      newTrack = { ...track };
  }

  return newTrack;
};

export default trackReducers;
