import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  artist: [],
  loading:false,
  error:false,
};

const fetchSlice = createSlice({
  name:"lastfm",
  initialState,
  reducer: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, {payload}) => {
      state.loadin = false;
      state.artist = payload;
      console.log(payload);
    },
    fetchError: (state) => {
      state.error = true;
      state.loadin = false;
      console.log(payload);
    }
  }
})