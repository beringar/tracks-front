import actionTypes from "../actionTypes";
import { Track } from "../../../types/Track";

export const loadAllTracksAction = (tracks: Track[]) => ({
  type: actionTypes.loadAllTracks,
  tracks,
});
