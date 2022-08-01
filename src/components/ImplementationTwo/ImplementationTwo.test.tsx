import { render, screen } from "@testing-library/react";
import ImplementationTwo from "./ImplementationTwo";

describe("ImplementationTwo tests:", () => {
  beforeEach(() => {
    render(<ImplementationTwo />);
  });

  it("When it is called, then names input is rendered", () => {
    const inputName = screen.getByPlaceholderText("Enter names");

    expect(inputName).toBeInTheDocument();
  });

  it("When it is called, then order input is rendered", () => {
    const inputOrder = screen.getAllByText(/Order/i);

    expect(inputOrder[0]).toBeInTheDocument();
  });

  it("When it is called, then omit input is rendered", () => {
    const inputOmit = screen.getAllByText(/Omit spaces/i);

    expect(inputOmit[0]).toBeInTheDocument();
  });

  it("When it is called, then previewCode is rendered", () => {
    const previewCode = screen.getByText(/\/ListNicknames/i);

    expect(previewCode).toBeInTheDocument();
  });
});
