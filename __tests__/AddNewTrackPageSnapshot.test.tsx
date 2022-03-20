import renderWithProviders from "../jest.setup";
import AddNewTrackPage from "../src/pages/new-track";

it("renders homepage unchanged", () => {
  const { container } = renderWithProviders(<AddNewTrackPage />);
  expect(container).toMatchSnapshot();
});
