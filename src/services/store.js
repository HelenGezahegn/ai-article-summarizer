import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// store is our global state
// reducer helps us obtain pieces of the state that we need rather than the entire thing always
// in this case, we only want the state from the articleApi so we add it as a reducer
export const store = configureStore({
  reducer: { [articleApi.reducerPath]: articleApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware)
});
