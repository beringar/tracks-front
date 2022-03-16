import { screen } from "@testing-library/react";
import renderWithProviders from "../jest.setup";

import MyProfilePage from "../src/pages/my-profile";

describe("Given a MyProfilePage component", () => {
  describe("When it's rendered", () => {
    test("It should render a heading", () => {
      renderWithProviders(<MyProfilePage />);

      const myFavsHeading = screen.getByRole("heading", {
        name: /My tracks/i,
      });

      expect(myFavsHeading).toBeInTheDocument();
    });
  });
});
