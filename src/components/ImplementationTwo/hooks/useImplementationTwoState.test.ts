import { act, renderHook, RenderHookResult } from "@testing-library/react";
import { useImplementationTwoState } from "./useImplementationTwoState";
import { UseImplementationTwoStateResponse } from "../models";
import { OrderEnum, YesOrNoEnum } from "../../../enums";
import { ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";

const code = `import ListNicknames from "../../components/ListNicknames/ListNicknames";
import { OrderEnum } from "../../enums";

<ListNicknames 
    names={["Triviño TI","Homer Dev","","Ragnar Front","Loki UX"]} 
    order={OrderEnum.ASC}
 />
`;

describe("useImplementationTwoState tests:", () => {
  let hook: RenderHookResult<UseImplementationTwoStateResponse, unknown>;

  beforeEach(() => {
    hook = renderHook(() => useImplementationTwoState());
  });

  it("When it is called, then initial state is returned", () => {
    expect(hook.result.current).toEqual({
      code,
      handleChangeNames: expect.anything(),
      handleChangeOmit: expect.anything(),
      handleChangeOrder: expect.anything(),
      names: ["Triviño TI", "Homer Dev", "", "Ragnar Front", "Loki UX"],
      omit: YesOrNoEnum.YES,
      order: OrderEnum.ASC,
      value: "Triviño TI,Homer Dev, , Ragnar Front,Loki UX",
    });
  });

  it("When handleChangeNames is called with  Brayan,Camilo,Arango, then the value change to it ", () => {
    act(() => {
      hook.result.current.handleChangeNames({
        target: {
          value: "Brayan,Camilo,Arango",
        },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(hook.result.current.value).toEqual("Brayan,Camilo,Arango");
  });

  it("When handleChangeOmit is called with NO, then omit is NO", () => {
    act(() => {
      hook.result.current.handleChangeOmit({
        target: {
          value: YesOrNoEnum.NO,
        },
      } as SelectChangeEvent);
    });

    expect(hook.result.current.omit).toEqual(YesOrNoEnum.NO);
  });

  it("When handleChangeOrder is called with DSC, then order is DSC", () => {
    act(() => {
      hook.result.current.handleChangeOrder({
        target: {
          value: OrderEnum.DSC,
        },
      } as SelectChangeEvent);
    });

    expect(hook.result.current.order).toEqual(OrderEnum.DSC);
  });
});
