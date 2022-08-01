import { act, fireEvent, screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders } from "../../utilTests";
import { useMediaQuery } from "@mui/material";

describe("Header tests:", () => {
  it("When it is called, then navbar is rendered", () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);
    renderWithProviders(<Header />);

    const rulesOption = screen.getByText(/RULES/i);
    const charactersOption = screen.getByText(/CHARACTERS/i);
    const img = screen.getByAltText("eClass Logo");
    const favoritesOption = screen.getByText(/FAVORITES/i);
    const extraOption = screen.getByText(/EXTRA/i);

    expect(charactersOption).toBeInTheDocument();
    expect(favoritesOption).toBeInTheDocument();
    expect(rulesOption).toBeInTheDocument();
    expect(extraOption).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it("When it is called and isMobile is true, then navbar is rendered", () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);
    renderWithProviders(<Header />);

    const burgerButton = screen.getByRole("button");
    const burgerIcon = screen.getByTestId("MenuIcon");

    expect(burgerButton).toBeInTheDocument();
    expect(burgerIcon).toBeInTheDocument();
  });

  it("When burger button is clicked, then header has showMenu class", () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);
    renderWithProviders(<Header />);

    const burgerButton = screen.getByRole("button");
    const header = screen.getByRole("banner");

    expect(header).not.toHaveClass("showMenu");

    act(() => {
      fireEvent.click(burgerButton);
    });

    expect(header).toHaveClass("showMenu");
  });
});
