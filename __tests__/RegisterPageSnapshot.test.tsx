import renderWithProviders from "../jest.setup";
import RegisterPage from "../src/pages/login";

it("renders login unchanged", () => {
  const { container } = renderWithProviders(<RegisterPage />);
  expect(container).toMatchSnapshot();
});
