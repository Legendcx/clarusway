import React from 'react'
import ArtistCard from '../components/cards/ArtistCard'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchStart, fetchError,fetchSuccess} from "../features/fetchSlice";

const Home = () => {

  const {artist, loading} = useSelector((state) => state.lastfm);
  const {image, name, listeners, playcount} = artist
  // console.log(artist);


  const {fetchStart, fetchSuccess, fetchError} = useSelector((state)=> state.lastfm);
  const dispatch = useDispatch()
  
  const API_KEY = process.env.REACT_APP_apiKey;
  const url= `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;

  const getTopArtist = async () => {
    dispatch(fetchStart())
    try {
      const {data} = await axios(url);
      console.log(data)
      dispatch(fetchSuccess(data.artists.artist))
    } catch (error) {
      console.log(error);
      dispatch(fetchError())
      
    }
  };

useEffect(() => {
  getTopArtist()
 
}, []);


  return (
    <div>
      <h1>Artist List</h1>
      {artist?.map((item, index) => <ArtistCard key={index} {...item}/>
      )}
    </div>
  )
}

export default Home;