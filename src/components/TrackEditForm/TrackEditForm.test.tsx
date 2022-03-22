import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TrackEditForm from "./TrackEditForm";
import renderWithProviders from "../../../jest.setup";

describe("Given a TrackForm component", () => {
  describe("When it's rendered", () => {
    test("It should render 'track name' input field", () => {
      renderWithProviders(
        <TrackEditForm
          track={{
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
          }}
        />
      );
      expect(
        screen.getByRole("textbox", { name: "track name" })
      ).toBeInTheDocument();
    });
    test("It should render 'refuge of departure' select field", () => {
      renderWithProviders(
        <TrackEditForm
          track={{
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
          }}
        />
      );
      expect(
        screen.getByRole("combobox", { name: "refuge of departure" })
      ).toBeInTheDocument();
    });
    test("It should render 'track difficulty' radiogroup field", () => {
      renderWithProviders(
        <TrackEditForm
          track={{
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
          }}
        />
      );
      expect(screen.getAllByRole("radiogroup").length).toEqual(1);
    });
    test("It should render 'kids friendly' checkbox field", () => {
      renderWithProviders(
        <TrackEditForm
          track={{
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
          }}
        />
      );
      expect(
        screen.getByRole("checkbox", { name: "Kids friendly" })
      ).toBeInTheDocument();
    });
    test("It should render 5 checkboxes", () => {
      renderWithProviders(
        <TrackEditForm
          track={{
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
          }}
        />
      );
      expect(screen.getAllByRole("checkbox").length).toEqual(5);
    });
    test("It should render 'Update track' submit button", () => {
      renderWithProviders(
        <TrackEditForm
          track={{
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
          }}
        />
      );
      expect(
        screen.getByRole("button", { name: "Update track" })
      ).toBeInTheDocument();
    });
  });
});
