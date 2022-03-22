import { screen } from "@testing-library/react";
import renderWithProviders from "../../../jest.setup";
import MyTracksList from "./MyTracksList";

describe("Given a TracksList component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a list", async () => {
      const tracksTest = [
        {
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
        },
        {
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
        },
      ];
      renderWithProviders(<MyTracksList tracks={tracksTest} />);

      const tracksList = await screen.findAllByRole("list");

      expect(tracksList[0]).toBeInTheDocument();
    });
  });
});
