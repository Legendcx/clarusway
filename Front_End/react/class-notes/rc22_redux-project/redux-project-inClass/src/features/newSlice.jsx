
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  newsList: [],
  loading: false,
  error: false,
};

export const getNews = createAsyncThunk(
  "getNews",
  async(thunkAPI, {rejectWithValue})=> {
  const API_KEY = "f8330b5ab903445588c9318ef341e5f4"
  const url= `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`
try{
  const {data} = await axios(url);
  return data.articles;
}catch(error){
  console.log(error);
  return rejectWithValue("Something went wrong");
}

})

const newsSlice = createSlice({
 name:  "news", 
  initialState,
  reducers: {
   clearNewList: (state)=> {
    state.newsList = [];
   },
  },
  extraReducers: (builder) => {
    builder.
    addCase(getNews.pending, (state) => {
      state.loading = true;
    })
    .addCase(getNews.fulfilled, (state, {payload}) =>{
      state.newsList = payload;
      state.loading =false;
    })
    .addCase(getNews.rejected, (state) =>{
      state.loading = false;
      state.error = true;
    });
  }
});


export const {clearNewList} = newsSlice.actions;
export default newsSlice.reducer;