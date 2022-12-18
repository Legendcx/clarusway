import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import TopAlbum from '../components/TopAlbum'
import TopTrack from '../components/TopTrack'


const Details = () => {
  const {name} = useParams()
  const [topAlbumList, setTopAlbumList] = useState([])
  const [topTrackList, setTopTrackList] = useState([])

  const API_KEY = process.env.REACT_APP_apiKey;

  const topAlbumsUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${API_KEY}&format=json`;

  const topTrackUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${API_KEY}&format=json`;

  const getTopTrack = async ()=> {
    try {
      const {data} = await axios.get(topTrackUrl);
      setTopTrackList(data)
      
    } catch (error) {
      console.log(error);
      
    }
  } 

useEffect(() => {
 axios.get(topAlbumsUrl).then((res)=>setTopAlbumList(res.data)).catch((err)=> console.log(err));

  getTopTrack();

}, [])


  return (
    <div>
      {topAlbumList["topalbums"]?.album.map((items, i) => {
       return <TopAlbum key={i} {...items} />

      })}

      {topTrackList["toptracks"]?.track.map((items, i) =>{
        return <TopTrack key={i} {...items}/>

      })}
    </div>
  )
}

export default Details;