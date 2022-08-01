import { renderHook } from "@testing-library/react";
import { OrderEnum } from "../../../enums";
import { useListNicknamesState } from "./useListNicknamesState";

const props = {
  order: OrderEnum.ASC,
  names: ["camilo", "brayan", "arango"],
};

describe("useListNicknamesState tests:", () => {
  it("When it is called with ASC order, then orderedNames is returned in ASC order", () => {
    const {
      result: { current },
    } = renderHook(() => useListNicknamesState(props));

    expect(current.orderedNames).toEqual(["arango", "brayan", "camilo"]);
  });

  it("When it is called with DSC order, then orderedNames is returned in DSC order", () => {
    const {
      result: { current },
    } = renderHook(() =>
      useListNicknamesState({ ...props, order: OrderEnum.DSC })
    );

    expect(current.orderedNames).toEqual(["camilo", "brayan", "arango"]);
  });
});
