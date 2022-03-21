import { Track } from "../../types/Track";
import actionTypes from "../actions/actionTypes";
import trackReducers from "./trackReducers";
import { HYDRATE } from "next-redux-wrapper";

describe("Given a trackReducers function", () => {
  describe("When it is called with an empty state and the loadTrack action with a track", () => {
    test("Then it should return a new state containing the passed track", () => {
      const currentState: Object = {};
      const trackTest: Track = {
        name: "Tuc de Sendrós per llac de Saboredo",
        refuge: "Saboredo",
        difficulty: "normal",
        kids: true,
        seasons: ["spring", "summer"],
        description:
          "Description of track, this route is very appealing because...",
        image: "https://mapio.net/images-p/7224428.jpg",
        gpx: "http://www.apatita.com/gps/aiguestortes_2_amitges_saboredo_colomers.zip",
        user: {
          username: "string",
          id: "string",
        },
        id: "6229bdbccf53a1fa6ac36821",
        createdAt: "fake",
        updatedAt: "fake",
      };

      const action = {
        type: actionTypes.loadTrack,
        track: trackTest,
      };

      const newState = trackReducers(currentState, action);

      expect(newState).toEqual(trackTest);
    });
  });

  describe("When it is called with an empty state and an empty action", () => {
    test("Then it should return the new state with an object with current state", () => {
      const currentState: Object = {};

      const action = {
        type: null,
      };

      const newState = trackReducers(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });

  describe("When called HYDRATE case", () => {
    test("Then should return the elements passed by HYDRATE payload", () => {
      const trackTest: Track = {
        name: "Tuc de Sendrós per llac de Saboredo",
        refuge: "Saboredo",
        difficulty: "normal",
        kids: true,
        seasons: ["spring", "summer"],
        description:
          "Description of track, this route is very appealing because...",
        image: "https://mapio.net/images-p/7224428.jpg",
        gpx: "http://www.apatita.com/gps/aiguestortes_2_amitges_saboredo_colomers.zip",
        user: {
          username: "string",
          id: "string",
        },
        id: "6229bdbccf53a1fa6ac36821",
        createdAt: "fake",
        updatedAt: "fake",
      };

      const action = {
        type: HYDRATE,
        payload: { track: trackTest },
      };

      const newTrack = trackReducers({}, action);

      expect(newTrack).toEqual(trackTest);
    });
  });
});
