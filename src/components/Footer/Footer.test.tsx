import Footer from "./Footer";
import { renderWithProviders } from "../../utilTests";
import { screen } from "@testing-library/react";

describe("Footer tests:", () => {
  it("When it component is called, then by BreYin is rendered", () => {
    renderWithProviders(<Footer />);
    const text = screen.getByText(/by BreYin/i);
    expect(text).toBeInTheDocument();
  });
});
