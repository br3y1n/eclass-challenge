import { FavoritesState } from "../models";
import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageEnum } from "../../enums";

const initialState: FavoritesState = {
  characters: JSON.parse(
    localStorage.getItem(LocalStorageEnum.CHARACTER) ?? "[]"
  ),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    removeFromFavorites: (state, { payload }) => {
      state.characters = state.characters.filter(({ id }) => id !== payload.id);
      localStorage.setItem(
        LocalStorageEnum.CHARACTER,
        JSON.stringify(state.characters)
      );
    },
    addToFavorites: (state, { payload }) => {
      state.characters.push(payload);
      localStorage.setItem(
        LocalStorageEnum.CHARACTER,
        JSON.stringify(state.characters)
      );
    },
  },
});

const favoritesReducer = favoritesSlice.reducer;

export { favoritesReducer as default, favoritesSlice };
