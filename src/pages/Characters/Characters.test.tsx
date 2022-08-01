import Characters from "./Characters";
import { renderWithProviders } from "../../utilTests";
import { act, fireEvent, screen } from "@testing-library/react";
import { useQuery } from "@apollo/client";
import { useMediaQuery } from "@mui/material";

const useQueryMock = {
  data: {
    characters: {
      info: {
        pages: 40,
      },
      results: [
        {
          id: "1",
          name: "Brayan",
          image: "test.png",
        },
      ],
    },
  },
  loading: false,
};

describe("Characters tests:", () => {
  beforeEach(() => {
    (useQuery as jest.Mock).mockReturnValue(useQueryMock);
    (useMediaQuery as jest.Mock).mockReturnValue(false);
  });

  it("When Characters is called, then Characters title is rendered", () => {
    renderWithProviders(<Characters />);
    const title = screen.getByText(/Characters/i);
    expect(title).toBeInTheDocument();
  });

  it("When results has data, then 1 card is rendered", () => {
    renderWithProviders(<Characters />);
    const text = screen.getByText(/Brayan/i);
    expect(text).toBeInTheDocument();
  });

  it("When results hasn't data, then not matches found is rendered", () => {
    (useQuery as jest.Mock).mockReturnValue({
      ...useQueryMock,
      data: {
        characters: {
          ...useQueryMock.data.characters,
          results: [],
        },
      },
    });

    renderWithProviders(<Characters />);
    const text = screen.getByText(/no matches found/i);
    expect(text).toBeInTheDocument();
  });

  it("When pages is 1, then a button with label 1 is rendered", () => {
    renderWithProviders(<Characters />);
    const button = screen.getByRole("button", { name: "page 1" });
    expect(button).toBeInTheDocument();
  });

  it("When loading is true, then loading is rendered", () => {
    (useQuery as jest.Mock).mockReturnValue({
      ...useQueryMock,
      loading: true,
    });

    renderWithProviders(<Characters />);
    const text = screen.getByText(/loading/i);
    expect(text).toBeInTheDocument();
  });

  it("When input name is filled, then useQuery is called 2 times", () => {
    renderWithProviders(<Characters />);

    const input = screen.getByLabelText("name");

    act(() => {
      fireEvent.change(input, { target: { value: "0123456789" } });
    });

    expect(useQuery).toBeCalledTimes(2);
  });

  it("When isMobile is true, then 6 button from pagination are rendered", () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);
    renderWithProviders(<Characters />);

    const buttons = screen.getAllByRole("button", { name: /page/i });

    expect(buttons).toHaveLength(6);
  });
});
