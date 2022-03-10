import { createReducer } from "@reduxjs/toolkit";
import { getAllTracks } from "./actions";

export type TracksState = {
  data: { tracks: [] } | undefined;
  pending: boolean;
  error: boolean;
};

const initialState: TracksState = {
  data: { tracks: [] },
  pending: false,
  error: false,
};

export const tracksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllTracks.pending, (state) => {
      state.pending = true;
    })
    .addCase(getAllTracks.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.data = payload;
    })
    .addCase(getAllTracks.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
});

export default tracksReducer;
