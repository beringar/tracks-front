import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { tracksReducer } from "../features/tracks";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
