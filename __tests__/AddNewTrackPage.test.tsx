import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import AddNewTrackPage from "../src/pages/new-track";

describe("Given a AddNewTrackPage component", () => {
  describe("When it's rendered", () => {
    test("It should render a heading", () => {
      render(
        <Provider store={store}>
          <AddNewTrackPage />
        </Provider>
      );

      const addNewTrackHeading = screen.getByRole("heading", {
        name: /Add new track/i,
      });

      expect(addNewTrackHeading).toBeInTheDocument();
    });
  });
});
