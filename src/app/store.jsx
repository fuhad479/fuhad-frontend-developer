import { configureStore } from "@reduxjs/toolkit";
import { capsulesApi } from "../services/capsules";

export const store = configureStore({
  reducer: {
    [capsulesApi.reducerPath]: capsulesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(capsulesApi.middleware),
  devTools: import.meta.env.DEV
});
