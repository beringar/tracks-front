import { Dispatch } from "redux";
import { loadAlltracks } from "../actions/actionsCreators";

const APIUrl: string = process.env.NEXT_PUBLIC_TRACKS_API_URL;

export const loadAllTracks = async (dispatch: Dispatch) => {
  const response = await fetch(`${APIUrl}tracks`);
  const tracksAPI: any = await response.json();
  return dispatch(loadAlltracks(tracksAPI.tracks));
};
