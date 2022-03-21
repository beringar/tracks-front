import { render, screen } from "@testing-library/react";
import "whatwg-fetch";
import { wrapper } from "../src/redux/store";
import { GetStaticPropsContext } from "next";
import TrackItemPage, { getStaticProps } from "../src/pages/track/[id]";

describe("Given a TrackItemPage component", () => {
  describe("When it's rendered", () => {
    test("It should render a track", async () => {
      const WrappedComponent = await wrapper.withRedux(TrackItemPage);

      const context = {
        params: { id: "623752aca6bbb8435d634b9c" },
      };

      await getStaticProps(context as GetStaticPropsContext);

      render(<WrappedComponent />);

      const expectedText = await screen.findByText(/new test/i);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
