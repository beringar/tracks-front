import { render, screen } from "@testing-library/react";
import renderWithProviders from "../jest.setup";

import MyFavouriteTracksPage from "../src/pages/favourite-tracks";

describe("Given a AddNewTrackPage component", () => {
  describe("When it's rendered", () => {
    test("It should render a heading", () => {
      renderWithProviders(<MyFavouriteTracksPage />);

      const myFavsHeading = screen.getByRole("heading", {
        name: /My favourite tracks/i,
      });

      expect(myFavsHeading).toBeInTheDocument();
    });
  });
});
