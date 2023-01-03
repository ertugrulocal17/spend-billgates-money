import { configureStore } from "@reduxjs/toolkit";
import elementSlice from "../features/elementSlice";
export const store = configureStore({
  reducer: {
    element: elementSlice,
  },
});
