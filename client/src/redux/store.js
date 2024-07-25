import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import rootReducer from "./slices";

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});
