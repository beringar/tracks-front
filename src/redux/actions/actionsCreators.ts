import actionTypes from "./actionTypes";
import { ITrack } from "../../types/ITrack";
import { IActionGetAllTracks } from "../../types/ITracksActionType";

export const loadAlltracks = (tracks: ITrack[]): IActionGetAllTracks => ({
  type: actionTypes.loadAlltracks,
  payload: tracks,
});
