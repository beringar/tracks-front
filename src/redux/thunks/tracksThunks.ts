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
  (toast, id: string) => async (dispatch: AppDispatch) => {
    const response = await fetch(`${APIUrl}tracks/${id}`, { method: "DELETE" });
    if (response.ok) {
      dispatch(deleteTrackAction(id));
      toast({
        title: "Track DELETED!",
        description: `Track #${id} removed from database`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };
