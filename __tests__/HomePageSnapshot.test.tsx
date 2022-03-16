import renderWithProviders from "../jest.setup";
import HomePage from "../src/pages/home";

it("renders homepage unchanged", () => {
  const { container } = renderWithProviders(<HomePage />);
  expect(container).toMatchSnapshot();
});
