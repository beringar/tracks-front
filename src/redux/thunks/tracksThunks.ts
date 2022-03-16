import { AppDispatch } from "../store";
import {
  deleteTrackAction,
  loadAllTracksAction,
} from "../actions/tracksActionCreator/tracksActionCreator";

const APIUrl: string = process.env.NEXT_PUBLIC_TRACKS_API_URL;

export const loadAllTracksThunk = async (dispatch: AppDispatch) => {
  const response = await fetch(`${APIUrl}tracks`);
  const tracksAPI = await response.json();

  dispatch(loadAllTracksAction(tracksAPI.tracks));
};

export const deleteTrackThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const response = await fetch(`${APIUrl}tracks/${id}`, { method: "DELETE" });
    if (response.ok) {
      dispatch(deleteTrackAction(id));
    }
  };
