import actionTypes from "../actionTypes";
import { ITrack } from "../../../types/ITrack";
import { ILoadAllTracksAction } from "../../../types/IAction";

export const loadAllTracksAction = (
  tracks: ITrack[]
): ILoadAllTracksAction => ({
  type: actionTypes.loadAllTracks,
  tracks,
});
