import actionTypes from "../actions/actionTypes";
import { deleteTrackThunk, loadAllTracksThunk } from "./tracksThunks";

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

      const action = {
        type: actionTypes.loadAllTracks,
        tracks,
      };

      await loadAllTracksThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given a deleteTrackThunk function", () => {
  describe("When it's invoked with a valid id ansd a toast instance", () => {
    test("Then it should call a dispatch", async () => {
      const dispatch = jest.fn();
      const id = "6229bdbccf53a1fa6ac36821";
      const toastInstance = () => {};

      const deleteThunk = deleteTrackThunk(toastInstance, id);

      await deleteThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
