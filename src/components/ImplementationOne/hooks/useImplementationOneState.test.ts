import { act, renderHook, RenderHookResult } from "@testing-library/react";
import { UseImplementationOneStateResponse } from "../models";
import { ChangeEvent } from "react";
import { useImplementationOneState } from "./useImplementationOneState";

const code = `import { getSumRef } from "../../utils"

const sumRef = getSumRef([1,2,3])

sumRef(console.log) // out -> 6
`;

describe("useImplementationTwoState tests:", () => {
  let hook: RenderHookResult<UseImplementationOneStateResponse, unknown>;

  beforeEach(() => {
    hook = renderHook(() => useImplementationOneState());
  });

  it("When it is called, then initial state is returned", () => {
    expect(hook.result.current).toEqual({
      code,
      onChange: expect.anything(),
      value: "1,2,3",
    });
  });

  it("When onChange is called with 20,22,24, then the value change to it ", () => {
    act(() => {
      hook.result.current.onChange({
        target: {
          value: "20,22,24",
        },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(hook.result.current.value).toEqual("20,22,24");
  });
});
