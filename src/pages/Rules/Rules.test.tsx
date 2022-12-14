import Rules from "./Rules";
import { render, screen } from "@testing-library/react";

describe("Rules tests:", () => {
  beforeEach(() => {
    render(<Rules />);
  });

  it("When Rules is called, then rules title is rendered", () => {
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Rules");
  });

  it("When Rules is called, then bonus exercise are rendered", () => {
    const text = screen.getByText(/bonus exercise/i);
    expect(text).toBeInTheDocument();
  });

  it("When Rules is called, then the guideline is rendered", () => {
    const text = screen.getByText(/The guideline/i);
    expect(text).toBeInTheDocument();
  });

  it("When Rules is called, then evaluation criteria are rendered", () => {
    const text = screen.getByText(/The evaluation criteria will be/i);
    expect(text).toBeInTheDocument();
  });

  it("When Rules is called, then preview code is rendered", () => {
    const text = screen.getByText(/<ListNicknames/i);
    expect(text).toBeInTheDocument();
  });
});
