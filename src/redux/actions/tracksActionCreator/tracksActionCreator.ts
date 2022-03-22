import actionTypes from "../actionTypes";
import { Track } from "../../../types/Track";

export const loadAllTracksAction = (tracks: Track[]) => ({
  type: actionTypes.loadAllTracks,
  tracks,
});

export const deleteTrackAction = (id: string) => ({
  type: actionTypes.deleteTrack,
  id,
});

export const createTrackAction = (track: Track) => ({
  type: actionTypes.createTrack,
  track,
});

export const loadTrackAction = (track: Track) => ({
  type: actionTypes.loadTrack,
  track,
});

export const updateTrackAction = (track: Track) => ({
  type: actionTypes.updateTrack,
  track,
});
