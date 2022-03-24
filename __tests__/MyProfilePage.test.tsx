import { act, render, screen } from "@testing-library/react";
import renderWithProviders from "../jest.setup";
import MyProfilePage, { getServerSideProps } from "../src/pages/my-profile";
import "whatwg-fetch";
import { wrapper } from "../src/redux/store";
import { GetServerSidePropsContext } from "next";

describe("Given a MyProfilePage component", () => {
  describe("When it's rendered", () => {
    test("It should render a heading", async () => {
      renderWithProviders(<MyProfilePage />);

      const myTracksHeading = screen.getByRole("heading", {
        name: /My tracks/i,
      });

      expect(myTracksHeading).toBeInTheDocument();
    });

    test("It should find 'Tuc de Sendrós' in the document", async () => {
      const WrappedComponent = await wrapper.withRedux(MyProfilePage);

      render(<WrappedComponent />);
      const context = {
        params: {},
      };

      await act(async () => {
        await getServerSideProps(context as GetServerSidePropsContext);
      });

      const expectedText = await screen.findByText(/My profile/i);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
