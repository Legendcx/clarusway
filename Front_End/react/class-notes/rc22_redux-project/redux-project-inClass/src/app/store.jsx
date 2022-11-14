

import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newSlice";

const store = configureStore({
  reducer:{
    Auth:authReducer,
    news: newsReducer,
  },
});

export default store;