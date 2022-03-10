import {
  tracksReducer,
  TracksState,
  getAllTracks,
} from "../src/features/tracks";

const initialState: TracksState = {
  data: { tracks: [] },
  pending: false,
  error: false,
};

describe("given a tracksReducer", () => {
  describe("when response is pending status", () => {
    test("It should set 'pending' to true", async () => {
      const action = { type: getAllTracks.pending.type };

      const state = tracksReducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        pending: true,
      });
    });
  });

  describe("when response is fullfilled status", () => {
    test("It should set 'pending' to false and set data payload", async () => {
      const payloadData = { tracks: ["track1", "track2"] };
      const action = {
        type: getAllTracks.fulfilled.type,
        payload: payloadData,
      };
      const state = tracksReducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        data: payloadData,
        pending: false,
      });
    });
  });

  describe("when response is rejected status", () => {
    test("It should set 'error' to true", async () => {
      const action = {
        type: getAllTracks.rejected.type,
      };
      const state = tracksReducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        error: true,
      });
    });
  });
});
