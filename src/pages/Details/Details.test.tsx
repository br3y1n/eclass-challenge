import { renderWithProviders } from "../../utilTests";
import { cleanup, screen } from "@testing-library/react";
import { useQuery } from "@apollo/client";
import Details from "./Details";

const useQueryMock = {
  data: {
    character: {
      image: "images.png",
      species: "human",
      gender: "female",
      created: "today",
      status: "killer",
      name: "Johanna",
    },
  },
  loading: false,
};

describe("Details tests:", () => {
  beforeEach(() => {
    (useQuery as jest.Mock).mockReturnValue(useQueryMock);
    renderWithProviders(<Details />);
  });

  it("When Details is called, then Details title is rendered", () => {
    const title = screen.getByText(/Details/i);
    expect(title).toBeInTheDocument();
  });

  it("When Details is called, then Characters title is rendered", () => {
    const img = screen.getByAltText("Johanna");
    expect(img).toBeInTheDocument();
  });

  it("When Details is called, then 1 table is rendered", () => {
    const key1 = screen.getByText(/name/i);
    const text1 = screen.getByText(/Johanna/i);
    const key2 = screen.getByText(/status/i);
    const text2 = screen.getByText(/killer/i);
    const key3 = screen.getByText(/species/i);
    const text3 = screen.getByText(/human/i);
    const key4 = screen.getByText(/gender/i);
    const text4 = screen.getByText(/female/i);
    const key5 = screen.getByText(/created/i);
    const text5 = screen.getByText(/today/i);

    expect(key1).toBeInTheDocument();
    expect(text1).toBeInTheDocument();
    expect(key2).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(key3).toBeInTheDocument();
    expect(text3).toBeInTheDocument();
    expect(key4).toBeInTheDocument();
    expect(text4).toBeInTheDocument();
    expect(key5).toBeInTheDocument();
    expect(text5).toBeInTheDocument();
  });

  it("When loading is true, then loader is rendered", () => {
    cleanup();
    (useQuery as jest.Mock).mockReturnValue({
      ...useQueryMock,
      loading: true,
    });
    renderWithProviders(<Details />);

    const text = screen.getByText(/Loading/i);
    expect(text).toBeInTheDocument();
  });
});
