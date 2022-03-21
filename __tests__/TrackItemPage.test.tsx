import { render, screen } from "@testing-library/react";
import "whatwg-fetch";
import { wrapper } from "../src/redux/store";
import { GetStaticPropsContext } from "next";
import TrackItemPage, { getStaticProps } from "../src/pages/track/[id]";

describe("Given a TrackItemPage component", () => {
  describe("When it's rendered", () => {
    test("It should render a track", async () => {
      const WrappedComponent = await wrapper.withRedux(TrackItemPage);

      render(<WrappedComponent />);
      const context = {
        params: { id: "6235b6b63adf2764185de853" },
      };

      await getStaticProps(context as GetStaticPropsContext);
      const expectedText = await screen.findByText(/Tuc de Sendrós/i);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
