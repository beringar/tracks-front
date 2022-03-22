import { render, screen } from "@testing-library/react";
import renderWithProviders from "../jest.setup";

import LoginPage from "../src/pages/login";

describe("Given a LoginPage component", () => {
  describe("When it's rendered", () => {
    test("It should render a heading", () => {
      renderWithProviders(<LoginPage />);

      const addNewTrackHeading = screen.getByRole("heading", {
        name: /Login/i,
      });

      expect(addNewTrackHeading).toBeInTheDocument();
    });
  });
});
