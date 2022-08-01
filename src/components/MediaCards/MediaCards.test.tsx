import { renderWithProviders } from "../../utilTests";
import { screen } from "@testing-library/react";
import MediaCards from "./MediaCards";

describe("MediaCards tests:", () => {
  it("When it component is called, then Brayan card is rendered", () => {
    renderWithProviders(
      <MediaCards cards={[{ id: "1", name: "Brayan", image: "testUrl" }]} />
    );
    const text = screen.getByText(/Brayan/i);
    expect(text).toBeInTheDocument();
  });

  it("When it component is called, then no matches found is rendered", () => {
    renderWithProviders(<MediaCards cards={[]} />);
    const text = screen.getByText(/No Matches found/i);
    expect(text).toBeInTheDocument();
  });
});
