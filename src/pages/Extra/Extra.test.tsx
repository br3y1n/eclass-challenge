import Extra from "./Extra";
import { renderWithProviders } from "../../utilTests";
import { screen } from "@testing-library/react";

describe("Extra tests:", () => {
  it("When it component is called, then Extra title is rendered", () => {
    renderWithProviders(<Extra />);
    const title = screen.getByText(/Extra/i);
    expect(title).toBeInTheDocument();
  });

  it("When it component is called, then Exercise 1 is rendered", () => {
    renderWithProviders(<Extra />);
    const title = screen.getByText(/Exercise 1/i);
    expect(title).toBeInTheDocument();
  });

  it("When it component is called, then Exercise 2 is rendered", () => {
    renderWithProviders(<Extra />);
    const title = screen.getByText(/Exercise 2/i);
    expect(title).toBeInTheDocument();
  });
});
