import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./AppSlice"; // Corrected the import name to match the file name

const store = configureStore({
  reducer: {
    app: appReducer, // Corrected the reducer name to match the import
  },
});

export default store;
