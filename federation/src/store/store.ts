import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { baseApi } from "../api";

export const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat([
        baseApi.middleware,
      ]),
  });
};
