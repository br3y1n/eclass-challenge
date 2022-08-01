import App from "./App";
import { render, screen } from "@testing-library/react";
import { useMediaQuery } from "@mui/material";

describe("App test:", () => {
  beforeEach(() => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);
  });

  it("When app is called, then Welcome message is render", () => {
    render(<App />);
    const welcomeMessage = screen.getByText(/Hi!, I'm Brayan Arango/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("When app is called, then rick and morty img is render", () => {
    render(<App />);
    const img = screen.getByAltText("Rick and Morty");
    expect(img).toBeInTheDocument();
  });

  it("When app is called, then menus is render", () => {
    render(<App />);
    const img = screen.getByAltText("eClass Logo");
    const rulesOption = screen.getByText(/RULES/i);
    const charactersOption = screen.getByText(/CHARACTERS/i);
    const favoritesOption = screen.getByText(/FAVORITES/i);
    const extraOption = screen.getByText(/EXTRA/i);

    expect(rulesOption).toBeInTheDocument();
    expect(charactersOption).toBeInTheDocument();
    expect(favoritesOption).toBeInTheDocument();
    expect(extraOption).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it("When app is called, then footer is render", () => {
    render(<App />);
    const footer = screen.getByText(/by BreYin/i);

    expect(footer).toBeInTheDocument();
  });
});
