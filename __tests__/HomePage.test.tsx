import { screen } from "@testing-library/react";
import renderWithProviders from "../jest.setup";

import HomePage from "../src/pages/home";

describe("Given a HomePage component", () => {
  describe("When it's rendered", () => {
    test("It should render a list a tracks", () => {
      renderWithProviders(<HomePage />);

      const loadingHeading = screen.getByRole("heading", {
        name: /Loading tracks.../i,
      });

      expect(loadingHeading).toBeInTheDocument();
    });
  });
});
