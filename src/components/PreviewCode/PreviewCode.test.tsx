import { renderWithProviders } from "../../utilTests";
import { screen } from "@testing-library/react";
import PreviewCode from "./PreviewCode";

describe("PreviewCode tests:", () => {
  it("When it component is called, then test code is rendered", () => {
    renderWithProviders(<PreviewCode code={"test code"} />);
    const text = screen.getByText(/test code/i);
    expect(text).toBeInTheDocument();
  });
});
