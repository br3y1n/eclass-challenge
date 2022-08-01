import { renderWithProviders } from "../../utilTests";
import { act, fireEvent, screen } from "@testing-library/react";
import MediaCard from "./MediaCard";

describe("MediaCard tests:", () => {
  beforeEach(() => {
    renderWithProviders(
      <MediaCard id={"1"} name={"Brayan"} image={"testUrl"} />
    );
  });

  it("When it is called, then 1 img is rendered", () => {
    const img = screen.getByAltText("Brayan");
    expect(img).toBeInTheDocument();
  });

  it("When it is called, then 1 name is rendered", () => {
    const text = screen.getByText(/Brayan/i);
    expect(text).toBeInTheDocument();
  });

  it("When it is called, then 1 link is rendered", () => {
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveProperty("href", "http://localhost/details/1");
  });

  it("When button is clicked, then FavoriteBorderIcon change to FavoriteIcon and viceversa", () => {
    const button = screen.getByRole("button");
    let icon = screen.getByTestId("FavoriteBorderIcon");

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });

    icon = screen.getByTestId("FavoriteIcon");

    expect(icon).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });

    icon = screen.getByTestId("FavoriteBorderIcon");

    expect(icon).toBeInTheDocument();
  });
});
