import { ILoadAllTracksAction } from "../../types/IAction";
import actionTypes from "../actions/actionTypes";
import { loadAllTracksThunk } from "./tracksThunks";

describe("Given a loadAllTracksThunk function", () => {
  describe("When it's invoked", () => {
    test("Then it should call the dispatch function", async () => {
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
        {
          name: "Punta Alta de Comalesbienes des de Cavallers",
          refuge: "Ventosa i Calvell",
          difficulty: "high",
          kids: false,
          seasons: ["spring", "summer"],
          description:
            "Description of track, this route is very appealing because...",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/ea/P1280563x_-_Pic_de_Comalesbienes.JPG",
          gpx: "http://www.apatita.com/gps/aiguestortes_2_amitges_saboredo_colomers.zip",
          user: "6228d9e2d3b484d4871608ee",
          id: "6229c2a2cf53a1fa6ac36823",
        },
      ];
      const dispatch = jest.fn();
      const toast = jest.fn();
      const action: ILoadAllTracksAction = {
        type: actionTypes.loadAllTracks,
        tracks,
      };

      await loadAllTracksThunk(toast)(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
