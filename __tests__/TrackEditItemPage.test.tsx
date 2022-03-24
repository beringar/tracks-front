import { act, render, screen } from "@testing-library/react";
import "whatwg-fetch";
import { wrapper } from "../src/redux/store";
import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import EditTrackPage, { getStaticProps } from "../src/pages/edit-track/[id]";
import { getStaticPaths } from "../src/pages/track/[id]";
import renderWithProviders from "../jest.setup";

describe("Given a EditTrackPage component", () => {
  describe("When it's rendered", () => {
    test("It should render a track", async () => {
      const WrappedComponent = await wrapper.withRedux(EditTrackPage);

      const context = {
        params: { id: "6239018bfb5f2c811f7ce309" },
      };

      await act(async () => {
        await getStaticPaths(context as GetStaticPathsContext);
        await getStaticProps(context as GetStaticPropsContext);
      });

      render(<WrappedComponent />);

      const expectedText = await screen.findAllByText(/Update track/i);

      expect(expectedText[0]).toBeInTheDocument();
    });
  });
});

describe("Given a EditTrackPage component", () => {
  describe("When it's rendered", () => {
    test("It should render a track", async () => {
      const { container } = renderWithProviders(<EditTrackPage />);
      expect(container).toMatchSnapshot();
    });
  });
});
