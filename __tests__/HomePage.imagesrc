import { render, screen } from "@testing-library/react";
import HomePage, { getServerSideProps } from "../src/pages/home";
import "whatwg-fetch";
import { wrapper } from "../src/redux/store";
import { GetServerSidePropsContext } from "next";

describe("Given a HomePage component", () => {
  describe("When it's rendered", () => {
    test("It should find 'Tuc de Sendrós' in the document", async () => {
      const WrappedComponent = await wrapper.withRedux(HomePage);

      render(<WrappedComponent />);
      const context = {
        params: {},
      };

      await getServerSideProps(context as GetServerSidePropsContext);
      const expectedText = await screen.findByText(/Tuc de Sendrós/i);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
