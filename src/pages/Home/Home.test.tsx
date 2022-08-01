import Home from "./Home";
import { render, screen } from "@testing-library/react";

describe("Home tests:", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("When Home is called, then Welcome message is render", () => {
    const welcomeMessage = screen.getByText(/Hi!, I'm Brayan Arango/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("When Home is called, then rick and morty img is render", () => {
    const img = screen.getByAltText("Rick and Morty");
    expect(img).toBeInTheDocument();
  });
});
