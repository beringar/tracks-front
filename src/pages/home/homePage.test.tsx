import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import HomePage from ".";

describe("Given a HomePage component", () => {
  describe("When it's rendered", () => {
    test("It should render a list a tracks", () => {
      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );

      const loadingHeading = screen.getByRole("heading", {
        name: /Loading tracks.../i,
      });

      expect(loadingHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered", () => {
    test("It should render the text 'Saboredo'", async () => {
      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );

      const nameOfTrack = await screen.findByText(/saboredo/i);

      expect(nameOfTrack).toBeInTheDocument();
    });
  });
});
