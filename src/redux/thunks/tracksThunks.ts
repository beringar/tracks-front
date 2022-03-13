import { Dispatch } from "react";
import { ILoadAllTracksAction } from "../../types/IAction";
import { loadAllTracksAction } from "../actions/tracksActionCreator/tracksActionCreator";

const APIUrl: string = process.env.NEXT_PUBLIC_TRACKS_API_URL;

export const loadAllTracksThunk = async (
  dispatch: Dispatch<ILoadAllTracksAction>
) => {
  const response = await fetch(`${APIUrl}tracks`);
  const tracksAPI: any = await response.json();
  dispatch(loadAllTracksAction(tracksAPI.tracks));
};
