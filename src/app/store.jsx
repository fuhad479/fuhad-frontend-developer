import { configureStore } from "@reduxjs/toolkit";
import { capsulesApi } from "../services/capsules";
import capsulesSlice from '../features/capsulesSlice'

export const store = configureStore({
  reducer: {
    [capsulesApi.reducerPath]: capsulesApi.reducer,
    capsules: capsulesSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(capsulesApi.middleware),
  devTools: import.meta.env.DEV
});
