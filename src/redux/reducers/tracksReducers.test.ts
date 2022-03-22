import { Track } from "../../types/Track";
import actionTypes from "../actions/actionTypes";
import tracksReducers from "./tracksReducers";
import { HYDRATE } from "next-redux-wrapper";

describe("Given a tracksReducers function", () => {
  describe("When it is called with an empty state and the loadAllTracks action with an array of tracks", () => {
    test("Then it should return a new state containing the passed array of tracks", () => {
      const currentState: Track[] = [];
      const tracksTest: Track[] = [
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
          user: {
            username: "miki",
            id: "6229bdbccf53a1fa6ac36821",
          },
          id: "6229bdbccf53a1fa6ac36821",
          createdAt: "fake",
          updatedAt: "fake",
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
          user: {
            username: "miki",
            id: "6229bdbccf53a1fa6ac36821",
          },
          id: "6229bdbccf53a1fa6ac36821",
          createdAt: "fake",
          updatedAt: "fake",
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
          user: {
            username: "miki",
            id: "6229bdbccf53a1fa6ac36821",
          },
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
          user: {
            username: "miki",
            id: "6229bdbccf53a1fa6ac36821",
          },
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
          user: {
            username: "miki",
            id: "6229bdbccf53a1fa6ac36821",
          },
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

  describe("When called HYDRATE case", () => {
    test("Then should return the elements passed by HYDRATE payload", () => {
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
          user: {
            username: "miki",
            id: "6229bdbccf53a1fa6ac36821",
          },
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
          user: {
            username: "miki",
            id: "6229bdbccf53a1fa6ac36821",
          },
          id: "6229bdbccf53a1fa6ac36821",
          createdAt: "fakedate",
          updatedAt: "faekedate",
        },
      ];

      const action = {
        type: HYDRATE,
        payload: { tracks: tracks },
      };

      const newTracks = tracksReducers([], action);

      expect(newTracks).toEqual(tracks);
    });
  });

  describe("When called a createTrack action passing a track", () => {
    test("Then should return array of tracks with the new track in", () => {
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
          user: {
            username: "miki",
            id: "6229bdbccf53a1fa6ac36821",
          },
          id: "6229bdbccf53a1fa6ac36821",
          createdAt: "fake",
          updatedAt: "fake",
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
          user: {
            username: "miki",
            id: "6229bdbccf53a1fa6ac36821",
          },
          id: "6229bdbccf53a1fa6ac36821",
          createdAt: "fake",
          updatedAt: "fake",
        },
      ];
      const trackToAdd: Track = {
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
          username: "miki",
          id: "6229bdbccf53a1fa6ac36821",
        },
        id: "6229bdbccf53a1fa6ac36821",
        createdAt: "fake",
        updatedAt: "fake",
      };

      const action = {
        type: actionTypes.createTrack,
        trackToAdd,
      };

      const newTracks = tracksReducers(currentTracks, action);

      expect(newTracks.length).toEqual(3);
    });
  });

  describe("When called an updateTrackAction", () => {
    test("Then should return the list of tracks with the updated track", () => {
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
          user: {
            username: "miki",
            id: "6229bdbccf53a1fa6ac36821",
          },
          id: "6229bdbccf53a1fa6ac36821",
          createdAt: "fake",
          updatedAt: "fake",
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
          user: {
            username: "miki",
            id: "6229bdbccf53a1fa6ac36821",
          },
          id: "6229bdbccf53a1fa6ac36821",
          createdAt: "fake",
          updatedAt: "fake",
        },
      ];

      const trackToUpdate: Track = {
        name: "Tuc de Sendrós per llac de Saboredo",
        refuge: "SaboredoUpdated",
        difficulty: "normal",
        kids: true,
        seasons: ["spring", "summer"],
        description:
          "Description of track, this route is very appealing because...",
        image: "https://mapio.net/images-p/7224428.jpg",
        gpx: "http://www.apatita.com/gps/aiguestortes_2_amitges_saboredo_colomers.zip",
        user: {
          username: "miki",
          id: "6229bdbccf53a1fa6ac36821",
        },
        id: "6229bdbccf53a1fa6ac36821",
        createdAt: "fake",
        updatedAt: "fake",
      };

      const action = {
        type: actionTypes.updateTrack,
        track: trackToUpdate,
      };

      const updatedTracks = tracksReducers(currentTracks, action);

      expect(updatedTracks.length).toBe(2);
    });
  });
});
