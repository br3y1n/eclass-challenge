import { act, renderHook, RenderHookResult } from "@testing-library/react";
import { useHeaderState } from "./useHeaderState";
import { UseHeaderStateResponse } from "../models/UseHeaderState.models";
import { useLocation } from "react-router-dom";
import { RoutesEnum } from "../../../enums";
import { MENU_ITEMS } from "../constants";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

describe("useHeaderState tests:", () => {
  let hook: RenderHookResult<UseHeaderStateResponse, unknown>;

  beforeEach(() => {
    (useLocation as jest.Mock).mockReturnValue({ pathname: RoutesEnum.HOME });

    hook = renderHook(() => useHeaderState());
  });

  it("When it is called, then initial state is returned", () => {
    expect(hook.result.current).toEqual({
      closeMenu: expect.anything(),
      items: MENU_ITEMS.desktop,
      pathname: RoutesEnum.HOME,
      showMenu: false,
      toggleMenu: expect.anything(),
    });
  });

  it("When toggleMenu is called, then showMenu is true", () => {
    act(() => {
      hook.result.current.toggleMenu();
    });

    expect(hook.result.current.showMenu).toEqual(true);
  });

  it("When closeMenu is called, then showMenu is false", () => {
    act(() => {
      hook.result.current.toggleMenu();
    });

    expect(hook.result.current.showMenu).toEqual(true);

    act(() => {
      hook.result.current.closeMenu();
    });

    expect(hook.result.current.showMenu).toEqual(false);
  });
});
