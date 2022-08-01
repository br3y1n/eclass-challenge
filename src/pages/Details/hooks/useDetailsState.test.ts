import { renderHook } from "@testing-library/react";
import { useQuery } from "@apollo/client";
import { useDetailsState } from "./useDetailsState";

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

describe("useDetailsState tests:", () => {
  it("When it is called, then initial state is returned", () => {
    (useQuery as jest.Mock).mockReturnValue(useQueryMock);

    const {
      result: { current },
    } = renderHook(() => useDetailsState());

    expect(current).toEqual({
      loading: false,
      character: useQueryMock.data.character,
      characterMapped: [
        ["species", "human"],
        ["gender", "female"],
        ["created", "today"],
        ["status", "killer"],
        ["name", "Johanna"],
      ],
    });
  });

  it("When it is called and no data, then character is empty", () => {
    (useQuery as jest.Mock).mockReturnValue({
      ...useQueryMock,
      data: undefined,
    });

    const {
      result: { current },
    } = renderHook(() => useDetailsState());

    expect(current).toEqual({
      loading: false,
      character: undefined,
      characterMapped: [],
    });
  });
});
