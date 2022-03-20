import { Track } from "../../types/Track";
import actionTypes from "../actions/actionTypes";
import tracksReducers from "./tracksReducers";
import { HYDRATE } from "next-redux-wrapper";

describe("Given a tracksReducers function", () => {
  describe("When it is called with an empty state and the loadAllTracks action with an array of tracks", () => {
    test("Then it should return a new state containing the passed array of tracks", () => {
      const currentState: Track[] = [];
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

      const newState = tracksReducers(currentState, action);

      expect(newState).toEqual(tracksTest);
    });
  });
  describe("When it is called with an empty state and the loadAllTracks action without a tracks array", () => {
    test("Then it should return the new state with an array of current tracks", () => {
      const currentState: Track[] = [];

      const action = {
        type: actionTypes.loadAllTracks,
      };

      const newState = tracksReducers(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });

  describe("When it is called with an empty state and an empty action", () => {
    test("Then it should return the new state with an array of current tracks", () => {
      const currentState: [] = [];

      const action = {
        type: null,
      };

      const newState = tracksReducers(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });

  describe("When called a deleteTrack action an an existing id", () => {
    test("Then should return and array of tracks without the deleted one", () => {
      const currentTracks: Track[] = [
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
          id: "6229bdbccf53a1fa6ac36823",
          createdAt: "fakedate",
          updatedAt: "faekedate",
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
          createdAt: "fakedate",
          updatedAt: "faekedate",
        },
      ];

      const expectedAfterDelete: Track[] = [
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
          id: "6229bdbccf53a1fa6ac36823",
          createdAt: "fakedate",
          updatedAt: "faekedate",
        },
      ];

      const action = {
        type: actionTypes.deleteTrack,
        id: "6229bdbccf53a1fa6ac36821",
      };

      const newProducts = tracksReducers(currentTracks, action);

      expect(newProducts).toEqual(expectedAfterDelete);
    });
  });

  describe("When called a HYDRATE case", () => {
    test("Then should return and array of tracks without the deleted one", () => {
      const tracks: Track[] = [
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
          id: "6229bdbccf53a1fa6ac36823",
          createdAt: "fakedate",
          updatedAt: "faekedate",
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
          createdAt: "fakedate",
          updatedAt: "faekedate",
        },
      ];

      const action = {
        type: HYDRATE,
        payload: { tracks: tracks },
      };

      const newProducts = tracksReducers([], action);

      expect(newProducts).toEqual(tracks);
    });
  });
});
