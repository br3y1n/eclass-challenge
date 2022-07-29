import { RootState } from "../../models";

const selectFavorites = (state: RootState) => state.favorites.characters;

export { selectFavorites };
