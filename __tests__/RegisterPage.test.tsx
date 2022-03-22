import { render, screen } from "@testing-library/react";
import renderWithProviders from "../jest.setup";

import RegisterPage from "../src/pages/register";

describe("Given a RegisterPage component", () => {
  describe("When it's rendered", () => {
    test("It should render a heading", () => {
      renderWithProviders(<RegisterPage />);

      const addNewTrackHeading = screen.getByRole("heading", {
        name: /Register/i,
      });

      expect(addNewTrackHeading).toBeInTheDocument();
    });
  });
});
