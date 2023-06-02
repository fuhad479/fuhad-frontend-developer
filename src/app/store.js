import { configureStore } from "@reduxjs/toolkit";
import capsulesSlice from "../features/capsulesSlice";
import capsulesApi from "../services/capsules";

export const store = configureStore({
  reducer: {
    [capsulesApi.reducerPath]: capsulesApi.reducer,
    capsules: capsulesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(capsulesApi.middleware),
  devTools: process.env.NODE_ENV === "development",
});
