import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "./LoginForm";
import renderWithProviders from "../../../jest.setup";

describe("Given a LoginForm component", () => {
  describe("When it's rendered", () => {
    test("It should render 'username' input field", () => {
      renderWithProviders(<LoginForm />);
      expect(screen.getByPlaceholderText("your username")).toBeInTheDocument();
    });
    test("It should render 'password' input field", () => {
      renderWithProviders(<LoginForm />);
      expect(screen.getByPlaceholderText("your password")).toBeInTheDocument();
    });
    test("It should render 'Login' submit button", () => {
      renderWithProviders(<LoginForm />);
      expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    });
  });
});
