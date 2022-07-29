import { FavoritesState } from "../models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: FavoritesState = {
  characters: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    updateFavorites: (state, { payload }) => {
      state.characters = payload;
    },
  },
});

const favoritesReducer = favoritesSlice.reducer;

export { favoritesReducer as default, favoritesSlice };
