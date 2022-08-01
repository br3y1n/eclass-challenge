import { useMediaCardState } from "./useMediaCardState";
import { UseMediaCardStateResponse } from "../models";
import {
  act,
  cleanup,
  render,
  RenderHookResult,
  screen,
} from "@testing-library/react";
import { renderHookWithProviders } from "../../../utilTests";

describe("useMediaCardState tests:", () => {
  let hook: RenderHookResult<UseMediaCardStateResponse, unknown>;

  beforeEach(() => {
    hook = renderHookWithProviders(() =>
      useMediaCardState({ id: "1", name: "1", image: "1" })
    );
  });

  it("When toggleFavorite is called, then FavoriteBorderIcon change to FavoriteIcon and viceversa", () => {
    render(hook.result.current.icon);

    let icon = screen.getByTestId("FavoriteBorderIcon");
    expect(icon).toBeInTheDocument();

    act(() => {
      hook.result.current.toggleFavorite();
    });

    cleanup();

    render(hook.result.current.icon);

    icon = screen.getByTestId("FavoriteIcon");

    expect(icon).toBeInTheDocument();
  });
});
