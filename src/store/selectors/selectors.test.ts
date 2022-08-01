import { selectFavorites } from "./selectors";

describe("selectors tests:", () => {
  it("When selectFavorites is called, then it return characters", () => {
    expect(selectFavorites({ favorites: { characters: [] } })).toEqual([]);
  });
});
