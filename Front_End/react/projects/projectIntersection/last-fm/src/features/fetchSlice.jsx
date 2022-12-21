// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   artist: [],
//   loading: false,
//   error: false,
//   darkMode: false,
// };

// const fetchSlice = createSlice({
//   name: "lastfm",
//   initialState,
//   reducers: {
//     fetchStart: (state, { payload }) => {
//       state.loading = true;
//     },
//     fetchSuccess: (state, { payload }) => {
//       state.loading = false;
//       state.artist = payload;
//       // console.log(payload);
//       // içine ne geldi kontrol etmek için
//     },
//     fetchError: (state, { payload }) => {
//       state.error = true;
//       state.loading = false;
//     },
//     setDarkMode: (state, { payload }) => {
//       state.darkModeerror = payload;
      
//     },
    
//   },
// });

// export const { fetchStart, fetchSuccess, fetchError } = fetchSlice.actions;

// export default fetchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  error: false,
  darkMode: true,
};
const fetchSlice = createSlice({
  name: "lastfm",
  initialState,
  reducers: {
    fetchError: (state) => {
      state.error = true;
    },
    setDarkMode: (state, { payload }) => {
      state.darkMode = payload;
    },
  },
});
export const { fetchError, setDarkMode } = fetchSlice.actions;
export default fetchSlice.reducer;