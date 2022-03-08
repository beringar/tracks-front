import { render, screen } from "@testing-library/react";

import Home from "../../../src/pages/index";

describe("Given a Home component", () => {
  describe("When it's rendered", () => {
    test("It should render a heading ", () => {
      render(<Home />);

      const heading = screen.getByRole("heading", {
        name: /Home page Tracks/i,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
