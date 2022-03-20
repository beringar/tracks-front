import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import MyTracksItem from "./MyTracksItem";
import renderWithProviders from "../../../jest.setup";
import { List } from "@chakra-ui/react";

describe("Given a MyTracksItem component", () => {
  describe("When it's rendered", () => {
    test("It should render 'Remove track' icon button", () => {
      const fakeProps = { name: "tuc", id: "3456" };
      renderWithProviders(
        <List>
          <MyTracksItem key="34" name={fakeProps.name} id={fakeProps.id} />
        </List>
      );
      expect(
        screen.getByRole("button", { name: "Remove track" })
      ).toBeInTheDocument();
    });
  });

  describe("When user clicks on remove button", () => {
    test("It should show up a feedback notification after action", async () => {
      const fakeProps = { name: "tuc", id: "6229bdbccf53a1fa6ac36821" };

      renderWithProviders(
        <List>
          <MyTracksItem key="34" name={fakeProps.name} id={fakeProps.id} />
        </List>
      );

      await userEvent.click(
        screen.getByRole("button", { name: "Remove track" })
      );

      const toastNotification = await screen.findByRole("alert");
      expect(toastNotification).toBeInTheDocument();
    });
  });
});
