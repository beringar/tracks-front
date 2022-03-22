import actionTypes from "../actions/actionTypes";
import {
  createTrackThunk,
  deleteTrackThunk,
  loadAllTracksThunk,
  loadTrackThunk,
} from "./tracksThunks";

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
          user: {
            username: "miki",
            id: "6229bdbccf53a1fa6ac36821",
          },
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
          user: {
            username: "miki",
            id: "6229bdbccf53a1fa6ac36821",
          },
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

describe("Given a loadTrackThunk function", () => {
  describe("When it's called", () => {
    test("then it should call a dispatch", async () => {
      const dispatch = jest.fn();
      const track = {
        name: "new test with isSubmitting state added to redux store with apiReducer",
        refuge: "Saboredo",
        difficulty: "low",
        kids: true,
        seasons: ["autumn"],
        description:
          "We test all the fields at once by providing invalid data - no name, too long description and the number of serving that is above 10. Then we submit the form and check that the number of error messages (rendered as span with alert role) is the same as the number of fields with errors. ",
        image:
          "https://firebasestorage.googleapis.com/v0/b/tracks-beringar.appspot.com/o/1647792812850_beringar_network99.jpg?alt=media&token=09763b62-35d3-408c-a0f2-7c2cc0606f3e",
        gpx: "https://firebasestorage.googleapis.com/v0/b/tracks-beringar.appspot.com/o/1647792812858_RUTA%20B%20%20Entorno%20Estany%20de%20Sant%20Maurici%20-%20Espot.gpx?alt=media&token=a5f53300-7c73-43bf-a915-88b61e54f1a8",
        user: {
          username: "Beren",
          id: "6228d9e2d3b484d4871608ee",
        },
        createdAt: "2022-03-20T16:13:32.660Z",
        updatedAt: "2022-03-20T16:13:33.667Z",
        id: "623752aca6bbb8435d634b9c",
      };

      const action = {
        type: actionTypes.loadTrack,
        track,
      };

      await loadTrackThunk(track.id)(dispatch);

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

describe("Given a createTrackThunk function", () => {
  describe("When it's called with a valid track", () => {
    test("Then it should call a dispatch", async () => {
      const dispatch = jest.fn();

      const trackToAdd = {
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
      };

      const toast = jest.fn();
      const reset = jest.fn();

      const createThunk = createTrackThunk(
        trackToAdd,
        trackToAdd.user.id,
        toast,
        reset
      );

      await createThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
