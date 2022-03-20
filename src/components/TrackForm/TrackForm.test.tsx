import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TrackForm from "./TrackForm";

describe("Given a TrackForm component", () => {
  describe("When it's rendered", () => {
    test("It should render 'track name' input field", () => {
      render(<TrackForm />);
      expect(
        screen.getByRole("textbox", { name: "track name" })
      ).toBeInTheDocument();
    });
    test("It should render 'refuge of departure' select field", () => {
      render(<TrackForm />);
      expect(
        screen.getByRole("combobox", { name: "refuge of departure" })
      ).toBeInTheDocument();
    });
    test("It should render 'refuge of departure' select field", () => {
      render(<TrackForm />);
      expect(
        screen.getByRole("combobox", { name: "refuge of departure" })
      ).toBeInTheDocument();
    });
    test("It should render 'track difficulty' radiogroup field", () => {
      render(<TrackForm />);
      expect(screen.getAllByRole("radiogroup").length).toEqual(1);
    });
    test("It should render 'kids friendly' checkbox field", () => {
      render(<TrackForm />);
      expect(
        screen.getByRole("checkbox", { name: "Kids friendly" })
      ).toBeInTheDocument();
    });
    test("It should render 5 checkboxes", () => {
      render(<TrackForm />);
      expect(screen.getAllByRole("checkbox").length).toEqual(5);
    });
    test("It should render 'Add new track' submit button", () => {
      render(<TrackForm />);
      expect(
        screen.getByRole("button", { name: "Add new track" })
      ).toBeInTheDocument();
    });
  });
});
