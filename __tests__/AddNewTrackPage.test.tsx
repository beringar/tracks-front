import { render, screen } from "@testing-library/react";
import renderWithProviders from "../jest.setup";

import AddNewTrackPage from "../src/pages/new-track";

describe("Given a AddNewTrackPage component", () => {
  describe("When it's rendered", () => {
    test("It should render a heading", () => {
      renderWithProviders(<AddNewTrackPage />);

      const addNewTrackHeading = screen.getByRole("heading", {
        name: /Add new track/i,
      });

      expect(addNewTrackHeading).toBeInTheDocument();
    });
  });
});
