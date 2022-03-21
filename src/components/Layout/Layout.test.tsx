import { Heading } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import renderWithProviders from "../../../jest.setup";

import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it's rendered", () => {
    test("It should render a logo image ", () => {
      renderWithProviders(
        <Layout>
          <Heading>Test Children</Heading>
        </Layout>
      );

      const logo = screen.getByRole("img", { name: /Tracks Logo/i });

      expect(logo).toBeInTheDocument();
    });
  });
});
