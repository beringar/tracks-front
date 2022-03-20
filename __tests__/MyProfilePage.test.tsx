import { screen } from "@testing-library/react";
import renderWithProviders from "../jest.setup";
import MyProfilePage from "../src/pages/my-profile";
import { loadAllTracksThunk } from "../src/redux/thunks/tracksThunks";

describe("Given a MyProfilePage component", () => {
  describe("When it's rendered", () => {
    test("It should render a heading", async () => {
      const dispatch = jest.fn();

      renderWithProviders(<MyProfilePage />);

      await loadAllTracksThunk(dispatch);

      const myFavsHeading = screen.getByRole("heading", {
        name: /My tracks/i,
      });

      expect(myFavsHeading).toBeInTheDocument();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
