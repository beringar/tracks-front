import { loadAllTracksAction } from "./tracksActionCreator";
import actionTypes from "../actionTypes";

describe("Given a loadAllTracks action", () => {
  describe("When it's called with an array of tracks", () => {
    test("Then it should return an object with the action type and the array", () => {
      const tracks = [
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
      const expectedAction = {
        type: actionTypes.loadAllTracks,
        tracks,
      };

      const action = loadAllTracksAction(tracks);

      expect(action).toEqual(expectedAction);
    });
  });
});
