import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegisterForm from "./RegisterForm";
import renderWithProviders from "../../../jest.setup";

describe("Given a RegisterForm component", () => {
  describe("When it's rendered", () => {
    test("It should render 'name' input field", () => {
      renderWithProviders(<RegisterForm />);
      expect(screen.getByPlaceholderText("your name")).toBeInTheDocument();
    });
    test("It should render 'username' input field", () => {
      renderWithProviders(<RegisterForm />);
      expect(
        screen.getByPlaceholderText("choose a unique username :)")
      ).toBeInTheDocument();
    });
    test("It should render 'password' input field", () => {
      renderWithProviders(<RegisterForm />);
      expect(
        screen.getByPlaceholderText("create a strong password")
      ).toBeInTheDocument();
    });
    test("It should render 'Register' submit button", () => {
      renderWithProviders(<RegisterForm />);
      expect(
        screen.getByRole("button", { name: "Register" })
      ).toBeInTheDocument();
    });
  });
});
