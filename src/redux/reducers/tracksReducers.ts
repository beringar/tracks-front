import { AnyAction } from "redux";
import actionTypes from "../actions/actionTypes";
import { HYDRATE } from "next-redux-wrapper";
import { Track } from "../../types/Track";

const tracksReducers = (
  currentTracks: Track[] = [],
  action: AnyAction = { type: "" }
) => {
  let newTracks: Track[];
  switch (action.type) {
    case HYDRATE:
      newTracks = [...action.payload.tracks];
      break;

    case actionTypes.loadAllTracks:
      newTracks = [...action.tracks];
      break;

    default:
      newTracks = [...currentTracks];
      break;
  }

  return newTracks;
};

export default tracksReducers;
