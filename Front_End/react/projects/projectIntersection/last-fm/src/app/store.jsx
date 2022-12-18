import { configureStore } from "@reduxjs/toolkit";
import FetchSlice from "../features/FetchSlice";

const store = configureStore({
  reducer: {
    lastfm: FetchSlice,
  },
});
export default store;