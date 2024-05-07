// Slice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  favoritesCount: 0, 
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
      state.favoritesCount++; 
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
      state.favoritesCount--; 
    },
  },
});

export const { addMovie, removeMovie } = favoritesSlice.actions;
export default favoritesSlice.reducer;
