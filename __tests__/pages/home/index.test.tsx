import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../src/app/store";
import Home from "../../../src/pages/index";

describe("Given a Home component", () => {
  describe("When it's rendered", () => {
    test("It should render a heading ", () => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
      const heading = screen.getByRole("heading", {
        name: /de moment és read CSR.../i,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
