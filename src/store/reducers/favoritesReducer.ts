import { FavoritesState } from "../models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: FavoritesState = {
  characters: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    removeFromFavorites: (state, { payload }) => {
      state.characters = state.characters.filter(({ id }) => id !== payload.id);
    },
    addToFavorites: (state, { payload }) => {
      state.characters.push(payload);
    },
  },
});

const favoritesReducer = favoritesSlice.reducer;

export { favoritesReducer as default, favoritesSlice };
