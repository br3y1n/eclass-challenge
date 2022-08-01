import { renderWithProviders } from "../../utilTests";
import { screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading tests:", () => {
  it("When it component is called, then Loading is rendered", () => {
    renderWithProviders(<Loading />);
    const text = screen.getByText(/Loading/i);
    expect(text).toBeInTheDocument();
  });
});
