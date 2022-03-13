import { ITrack } from "../../types/ITrack";
import actionTypes from "../actions/actionTypes";
import tracksReducer from "./tracksReducer";

describe("Given a tracksReducer function", () => {
  describe("When it is called with an empty state and the loadAllTracks action with an array of tracks", () => {
    test("Then it should return a new state containing the passed array of tracks", () => {
      const currentState: ITrack[] = [];
      const tracksTest = [
        {
          name: "Tuc de Sendrós per llac de Saboredo",
          refuge: "Saboredo",
          difficulty: "normal",
          kids: true,
          seasons: ["spring", "summer"],
          description:
            "Description of track, this route is very appealing because...",
          image: "https://mapio.net/images-p/7224428.jpg",
          gpx: "http://www.apatita.com/gps/aiguestortes_2_amitges_saboredo_colomers.zip",
          user: "6228d9e2d3b484d4871608ee",
          id: "6229bdbccf53a1fa6ac36821",
        },
        {
          name: "Tuc de Sendrós per llac de Saboredo",
          refuge: "Saboredo",
          difficulty: "normal",
          kids: true,
          seasons: ["spring", "summer"],
          description:
            "Description of track, this route is very appealing because...",
          image: "https://mapio.net/images-p/7224428.jpg",
          gpx: "http://www.apatita.com/gps/aiguestortes_2_amitges_saboredo_colomers.zip",
          user: "6228d9e2d3b484d4871608ee",
          id: "6229bdbccf53a1fa6ac36821",
        },
      ];
      const action = {
        type: actionTypes.loadAllTracks,
        tracks: tracksTest,
      };

      const newState = tracksReducer(currentState, action);

      expect(newState).toEqual(tracksTest);
    });
  });
  describe("When it is called with an empty state and the loadAllTracks action without a tracks array", () => {
    test("Then it should return the new state with an array of current tracks", () => {
      const currentState: ITrack[] = [];

      const action = {
        type: actionTypes.loadAllTracks,
      };

      const newState = tracksReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });

  describe("When it is called with an empty state and an empty action", () => {
    test("Then it should return the new state with an array of current tracks", () => {
      const currentState: [] = [];

      const action = {
        type: null,
      };

      const newState = tracksReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });
});
