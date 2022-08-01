import { act, renderHook, RenderHookResult } from "@testing-library/react";
import { useCharactersState } from "./useCharactersState";
import { useQuery } from "@apollo/client";
import { useMediaQuery } from "@mui/material";
import { ChangeEvent } from "react";
import { UseCharactersStateResponse } from "../models";

const useQueryMock = {
  data: {
    characters: {
      info: {
        pages: 1,
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

describe("useCharactersState tests:", () => {
  let hook: RenderHookResult<UseCharactersStateResponse, unknown>;

  beforeEach(() => {
    (useQuery as jest.Mock).mockReturnValue(useQueryMock);
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    hook = renderHook(() => useCharactersState());
  });

  it("When it is called, then initial state is returned", () => {
    expect(hook.result.current).toEqual({
      cards: [
        {
          id: "1",
          image: "test.png",
          name: "Brayan",
        },
      ],
      handleChangeInput: expect.anything(),
      handleChangePagination: expect.anything(),
      loading: false,
      name: "",
      page: 1,
      pages: 1,
      isMobile: false,
    });
  });

  it("When handleChangePagination is called with 7, then page change to 7 and useQuery is called again", () => {
    expect(hook.result.current.page).toEqual(1);
    expect(useQuery).toBeCalledTimes(1);

    act(() => {
      hook.result.current.handleChangePagination({} as ChangeEvent<unknown>, 7);
    });

    expect(hook.result.current.page).toEqual(7);
    expect(useQuery).toBeCalledTimes(2);
  });

  it("When handleChangeInput is called with test, then name change to test and useQuery is called again", () => {
    expect(hook.result.current.name).toEqual("");
    expect(useQuery).toBeCalledTimes(1);

    act(() => {
      hook.result.current.handleChangeInput({
        target: {
          value: "test",
        },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(hook.result.current.name).toEqual("test");
    expect(useQuery).toBeCalledTimes(2);
  });
});
