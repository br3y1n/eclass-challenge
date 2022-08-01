import Favorites from "./Favorites";
import { act, fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utilTests";

describe("Favorites tests:", () => {
  it("When Favorites is called, then rules title is render", () => {
    renderWithProviders(<Favorites />);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Favorites");
  });

  it("When no favorite characters selected, then no matches found is render", () => {
    renderWithProviders(<Favorites />);
    const text = screen.getByText(/No matches found/i);
    expect(text).toBeInTheDocument();
  });

  it("When Favorites is called and Brayan and Camilo characters are selected, then Brayan and Camilo card are render", () => {
    renderWithProviders(<Favorites />, {
      preloadedState: {
        favorites: {
          characters: [
            {
              id: "1",
              image: "test.png",
              name: "Brayan",
            },
            {
              id: "2",
              image: "test2.png",
              name: "Camilo",
            },
          ],
        },
      },
    });

    const img1 = screen.getByAltText("Brayan");
    const text1 = screen.getByText(/Brayan/i);
    const img2 = screen.getByAltText("Camilo");
    const text2 = screen.getByText(/Camilo/i);

    expect(img1).toBeInTheDocument();
    expect(img2).toBeInTheDocument();
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });

  it("When favorite button from Brayan card is clicked, then No matches found is render", () => {
    renderWithProviders(<Favorites />, {
      preloadedState: {
        favorites: {
          characters: [
            {
              id: "1",
              image: "test.png",
              name: "Brayan",
            },
          ],
        },
      },
    });

    const img = screen.getByAltText("Brayan");
    const button = screen.getByRole("button");

    expect(img).toBeInTheDocument();

    act(() => {
      fireEvent.click(button);
    });

    const text = screen.getByText(/No matches found/i);
    expect(text).toBeInTheDocument();
  });

  it("When see more from Brayan card is clicked, then No matches found is render", () => {
    renderWithProviders(<Favorites />, {
      preloadedState: {
        favorites: {
          characters: [
            {
              id: "1",
              image: "test.png",
              name: "Brayan",
            },
          ],
        },
      },
    });

    const img = screen.getByAltText("Brayan");
    const link = screen.getByRole("link");

    expect(img).toBeInTheDocument();
    expect(link).toHaveProperty("href","1")

    act(() => {
      fireEvent.click(link);
    });

    const text = screen.getByText(/No matches found/i);
    expect(text).toBeInTheDocument();
  });
});
