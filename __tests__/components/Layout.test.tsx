import { render, screen } from "@testing-library/react";

import Layout, { Props } from "../../src/components/Layout/Layout";

describe("Given a Layout component", () => {
  describe("When it's rendered with a title 'test layout title' h1 heading with accessible name 'test layout'", () => {
    test("It should render a heading ", () => {
      const testProps: Props = {
        title: "test layout title",
        children: <h1>test layout</h1>,
      };

      render(<Layout {...testProps} />);

      const heading = screen.getByRole("heading", { name: /test layout/i });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's rendered without passing a title", () => {
    test("It should render a heading ", () => {
      render(
        <Layout>
          <h1>test layout</h1>
        </Layout>
      );

      const heading = screen.getByRole("heading", { name: /test layout/i });

      expect(heading).toBeInTheDocument();
    });
  });
});
