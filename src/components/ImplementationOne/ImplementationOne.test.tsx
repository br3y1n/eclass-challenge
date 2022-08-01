import { act, fireEvent, render, screen } from "@testing-library/react";
import ImplementationOne from "./ImplementationOne";

describe("ImplementationOne tests:", () => {
  beforeEach(() => {
    render(<ImplementationOne />);
  });

  it("When it is called, then numbers input is rendered", () => {
    const inputNumbers = screen.getByPlaceholderText("Enter numbers");

    expect(inputNumbers).toBeInTheDocument();
  });

  it("When it is called, then previewCode is rendered", () => {
    const previewCode = screen.getByText(/getSumRef\(/i);

    expect(previewCode).toBeInTheDocument();
  });

  it("When inputNumbers change with 20,21,22, then the preview code show 61", () => {
    const inputNumbers = screen.getByPlaceholderText("Enter numbers");

    act(() => {
      fireEvent.change(inputNumbers, { target: { value: "20,21,22" } });
    });

    const previewValue = screen.getByText(/61/);

    expect(previewValue).toBeInTheDocument();
  });
});
