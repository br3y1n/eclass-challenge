import { addToFavorites, removeFromFavorites } from "../actions/actions";
import favoritesReducer from "./favoritesReducer";
import { Character } from "../../models";
import { LocalStorageEnum } from "../../enums";

const character: Character = {
  name: "Brayan",
  image: "testUrl",
  id: "1",
};

describe("favoritesReducer tests:", () => {
  let setItem: jest.SpyInstance;

  beforeEach(() => {
    setItem = jest.spyOn(Storage.prototype, "setItem");
  });

  it("When removeFromFavorites is called, then localStorage.setItem set characters with empty", () => {
    expect(
      favoritesReducer(
        { characters: [character] },
        removeFromFavorites(character)
      )
    ).toEqual({ characters: [] });

    expect(setItem).toBeCalledWith(LocalStorageEnum.CHARACTER, "[]");
  });

  it("When addToFavorites is called, then localStorage.setItem set characters with data", () => {
    expect(
      favoritesReducer({ characters: [] }, addToFavorites(character))
    ).toEqual({ characters: [character] });

    expect(setItem).toBeCalledWith(
      LocalStorageEnum.CHARACTER,
      `[${JSON.stringify(character)}]`
    );
  });
});
