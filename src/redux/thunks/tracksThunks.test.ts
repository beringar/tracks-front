import actionTypes from "../actions/actionTypes";
import {
  createTrackThunk,
  deleteTrackThunk,
  loadAllTracksThunk,
  loadTrackThunk,
  updateTrackThunk,
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
        name: "4 summits: Mil Potros, Pinetó, Rocablanca and Lo Tessó",
        refuge: "Pla de la Font",
        difficulty: "normal",
        kids: true,
        seasons: ["spring,summer,autumn"],
        description:
          "Leaving the Pla de la Font Refuge, we face the climb towards the Fogueroix pass, shortly before reaching the pass we turn right and enter a small pine forest, at the exit of the forest we can already see the peak of a thousand Potros, before passing through the hole of the Bread while contemplating the views towards the Vall d'Escrita, we ascend to the first summit Mil Potros and then careening the Pinetó. Now heading north we begin to climb the ridge of Roca Blanca, to the west we see the impressive Vall de Cabanes. Here we find a step of IIº before making the third peak. We descend towards the Son pass, always heading north we ascend to the Teso. To the east, going down the Teso shovel, we find two well-marked forests, we go down between the two forests until we reach Les Estanyeres and we come across the path that is Son, this path will take us to the refuge.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/tracks-beringar.appspot.com/o/1647903115279_4cimspladelafont.jpg?alt=media&token=d4e5562e-c3d6-460a-bb2d-44269eff0bf9",
        gpx: "https://firebasestorage.googleapis.com/v0/b/tracks-beringar.appspot.com/o/1647903115281_4-cims-pla-de-la-font.gpx?alt=media&token=e6067cac-31ae-4bcc-9ed7-384b2afe5955",
        user: {
          username: "miki89",
          id: "6238f532784bd2e6462e087e",
        },
        createdAt: "2022-03-21T22:51:55.172Z",
        updatedAt: "2022-03-21T22:51:56.234Z",
        id: "6239018bfb5f2c811f7ce309",
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
        image: ["https://mapio.net/images-p/7224428.jpg"],
        gpx: [
          "http://www.apatita.com/gps/aiguestortes_2_amitges_saboredo_colomers.zip",
        ],
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
      expect(toast).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a createTrackThunk function", () => {
  describe("When it's called with invalid data track", () => {
    test("Then it should call a toast with error", async () => {
      const dispatch = jest.fn();

      const trackToAdd = {
        name: "XXXXXXXXX",
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

      expect(toast).toHaveBeenCalled();
    });
  });
});

describe("Given a updateTrackThunk function", () => {
  describe("When it's called with a valid track", () => {
    test("Then it should call a dispatch", async () => {
      const dispatch = jest.fn();

      const trackToUpdate = {
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
      };

      const toast = jest.fn();
      const reset = jest.fn();

      const updateThunkTest = await updateTrackThunk(
        trackToUpdate.id,
        trackToUpdate,

        toast,
        reset
      );

      await updateThunkTest(dispatch);
      expect(toast).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's called with invalid data track", () => {
    test("Then it should call a toast with error", async () => {
      const dispatch = jest.fn();

      const trackToAdd = {
        name: "XXXXXXXXX",
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
      };

      const toast = jest.fn();
      const reset = jest.fn();

      const updateT = updateTrackThunk(trackToAdd.id, trackToAdd, toast, reset);

      await updateT(dispatch);

      expect(toast).toHaveBeenCalled();
    });
  });
});
