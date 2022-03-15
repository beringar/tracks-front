import actionTypes from "../actionTypes";
import { Track } from "../../../types/Track";
import { ILoadAllTracksAction } from "../../../types/IAction";

export const loadAllTracksAction = (tracks: Track[]): ILoadAllTracksAction => ({
  type: actionTypes.loadAllTracks,
  tracks,
});
