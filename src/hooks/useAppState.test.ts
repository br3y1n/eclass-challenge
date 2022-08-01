import { renderHook } from "@testing-library/react";
import { useAppState } from "./useAppState";
import { useMediaQuery } from "@mui/material";

describe("useDetailsState tests:", () => {
  it("When it is called, then initial state is returned", () => {
    (useMediaQuery as jest.Mock).mockImplementation((fn) =>
      fn({
        breakpoints: {
          down: () => false,
        },
      })
    );

    const {
      result: { current },
    } = renderHook(() => useAppState());

    expect(current).toEqual({
      isMobile: false,
    });
  });
});
