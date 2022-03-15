import { AppDispatch } from "../store";
import { loadAllTracksAction } from "../actions/tracksActionCreator/tracksActionCreator";

const APIUrl: string = process.env.NEXT_PUBLIC_TRACKS_API_URL;

export const loadAllTracksThunk = async (dispatch: AppDispatch) => {
  const response = await fetch(`${APIUrl}tracks`);
  const tracksAPI = await response.json();

  dispatch(loadAllTracksAction(tracksAPI.tracks));
};
