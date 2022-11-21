import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    purcheses: null,
    sales: null,
    products: null,
    brands: null,
    firms: null,
    loading: false,
    categories: null,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { data, url } }) => {
      state.loading = false;
      state[url] = data;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, loginSuccess, getSuccess, fetchFail } =
  stockSlice.actions;
export default stockSlice.reducer;
