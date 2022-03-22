import renderWithProviders from "../jest.setup";
import LoginPage from "../src/pages/login";

it("renders login unchanged", () => {
  const { container } = renderWithProviders(<LoginPage />);
  expect(container).toMatchSnapshot();
});
