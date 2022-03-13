import { Dispatch } from "react";
import { ILoadAllTracksAction } from "../../types/IAction";
import { loadAllTracksAction } from "../actions/tracksActionCreator/tracksActionCreator";

const APIUrl: string = process.env.NEXT_PUBLIC_TRACKS_API_URL;

export const loadAllTracksThunk =
  (toast) => async (dispatch: Dispatch<ILoadAllTracksAction>) => {
    try {
      const response = await fetch(`${APIUrl}tracks`);
      const tracksAPI = await response.json();
      /* if (!response.ok) {
        toast({
          title: "Error!",
          description: tracksAPI.message,
          status: "error",
        });
        return;
      } */
      dispatch(loadAllTracksAction(tracksAPI.tracks));
    } catch (error) {
      toast({
        position: "top",
        title: "error!",
        description: error.message,
        status: "error",
      });
    }
  };
