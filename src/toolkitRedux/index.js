import { combineReducers, configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import rouletteSlice from "./rouletteSlice";
import repositorySlice from "./repositorySlice";

const rootReducer = combineReducers({
  chatSlice,
  rouletteSlice,
  repositorySlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
