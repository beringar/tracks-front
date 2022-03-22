import {
  createTrackAction,
  deleteTrackAction,
  loadAllTracksAction,
  loadTrackAction,
  updateTrackAction,
} from "./tracksActionCreator";
import actionTypes from "../actionTypes";
import { Track } from "../../../types/Track";

describe("Given a loadAllTracks action", () => {
  describe("When it's called with an array of tracks", () => {
    test("Then it should return an object with the action type and the array", () => {
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
            username: "string",
            id: "string",
          },
          id: "6229bdbccf53a1fa6ac36821",
          createdAt: "datefake",
          updatedAt: "datefake",
        },
      ];
      const expectedAction = {
        type: actionTypes.loadAllTracks,
        tracks,
      };

      const action = loadAllTracksAction(tracks);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteTrackAction", () => {
  describe("When it receives an id", () => {
    test("Then it should return an action delete", () => {
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
            username: "string",
            id: "string",
          },
          id: "6229bdbccf53a1fa6ac36821",
          createdAt: "datefake",
          updatedAt: "datefake",
        },
      ];
      const expectedAction = {
        type: "delete-track",
        id: "6229bdbccf53a1fa6ac36821",
      };
      const action = deleteTrackAction(tracks[0].id);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a createTrackAction", () => {
  describe("When it receives a track", () => {
    test("Then it should return an action delete", () => {
      const track: Track = {
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
        createdAt: "datefake",
        updatedAt: "datefake",
      };
      const expectedAction = { type: "create-track", track };

      const action = createTrackAction(track);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a loadTrackAction", () => {
  describe("When it receives a track", () => {
    test("Then it should return an action with this track", () => {
      const track: Track = {
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
        createdAt: "datefake",
        updatedAt: "datefake",
      };

      const expectedAction = { type: "load-track", track: track };
      const action = loadTrackAction(track);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a updateTrackAction", () => {
  describe("When it receives a track", () => {
    test("Then it should return an action update-track", () => {
      const track: Track = {
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
        createdAt: "datefake",
        updatedAt: "datefake",
      };

      const expectedAction = { type: "update-track", track };
      const action = updateTrackAction(track);
      expect(action).toEqual(expectedAction);
    });
  });
});
