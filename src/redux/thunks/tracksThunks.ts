import { AppDispatch } from "../store";
import path from "path";
import {
  deleteTrackAction,
  loadAllTracksAction,
  loadTrackAction,
  updateTrackAction,
} from "../actions/tracksActionCreator/tracksActionCreator";
import {
  setSubmittingAction,
  unsetSubmittingAction,
} from "../actions/ApiActionCreator/ApiActionCreator";
import { Track } from "../../types/Track";

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

export const createTrackThunk =
  (track, userId, toast, reset) => async (dispatch: AppDispatch) => {
    dispatch(setSubmittingAction());
    const formData = new FormData();
    formData.append("name", track.name);
    formData.append("refuge", track.refuge);
    formData.append("difficulty", track.difficulty);
    formData.append("kids", track.kids);
    formData.append("seasons", JSON.stringify(track.seasons));
    formData.append("description", track.description);
    formData.append("user", userId);
    formData.append("image", track.image[0]);
    formData.append("gpx", track.gpx[0]);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TRACKS_API_URL}tracks/new`,
      {
        method: "POST",
        body: formData,
      }
    );
    const responseServer = await response.json();
    if (response.ok) {
      toast({
        title: "Track CREATED!",
        description: responseServer.message,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      reset();
    } else {
      toast({
        title: "ERROR creating track!",
        description: responseServer.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    dispatch(unsetSubmittingAction());
  };

export const updateTrackThunk =
  (trackId, track, toast) => async (dispatch: AppDispatch) => {
    dispatch(setSubmittingAction());
    const formData = new FormData();
    formData.append("name", track.name);
    formData.append("refuge", track.refuge);
    formData.append("difficulty", track.difficulty);
    formData.append("kids", track.kids);
    formData.append("seasons", JSON.stringify(track.seasons));
    formData.append("description", track.description);
    formData.append("image", track.image[0]);
    formData.append("gpx", track.gpx[0]);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TRACKS_API_URL}tracks/update/${trackId}`,
      {
        method: "PATCH",
        body: formData,
      }
    );
    const responseServer = await response.json();
    if (response.ok) {
      dispatch(updateTrackAction(responseServer));
      const revalidateURL = path.join(
        `/api/revalidate/revalidate?path=/track/${trackId}&secret=${process.env.NEXT_PUBLIC_REVALIDATE_TOKEN}`
      );
      fetch(revalidateURL);

      toast({
        title: "Track UPDATED!",
        description: responseServer.message,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "ERROR updating track!",
        description: responseServer.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    dispatch(unsetSubmittingAction());
    return false;
  };

export const loadTrackThunk = (id: string) => async (dispatch: AppDispatch) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TRACKS_API_URL}tracks/${id}`
  );

  const track: Track = await response.json();

  if (response.ok) {
    dispatch(loadTrackAction(track));
  }
};
