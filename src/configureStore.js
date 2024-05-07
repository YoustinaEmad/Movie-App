import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./Slice";

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
