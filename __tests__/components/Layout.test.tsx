import { render, screen } from "@testing-library/react";

import Layout from "../../src/components/Layout";

describe("Given a Layout component", () => {
  describe("When it's rendered", () => {
    test("It should render a logo image ", () => {
      render(<Layout />);

      const logo = screen.getByRole("img", { name: /Tracks Logo/i });

      expect(logo).toBeInTheDocument();
    });
  });
});
