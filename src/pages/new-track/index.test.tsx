import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import AddNewTrackPage from "./";

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
