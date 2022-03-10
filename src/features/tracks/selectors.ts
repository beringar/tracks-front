import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectTracks = (state: RootState) => state.tracks;

export const tracksSelector = createSelector(selectTracks, (state) => state);
