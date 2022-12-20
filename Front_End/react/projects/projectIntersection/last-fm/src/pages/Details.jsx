import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import TopAlbum from "../components/TopAlbum";
import TopTrack from "../components/TopTrack";

const Details = () => {
  const { name } = useParams();
  const { state: image } = useLocation();

  const [topAlbumList, setTopAlbumList] = useState([1]);
  const [topTrackList, setTopTrackList] = useState([]);

  // const API_KEY = process.env.REACT_APP_apiKey;

  const topAlbumsUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=de8c75d37f68b2e7258f4aaa3f91f258&format=json`;
  const topTracksUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=de8c75d37f68b2e7258f4aaa3f91f258&format=json`;

  const gettopTrack = async () => {
    try {
      const { data } = await axios.get(topTracksUrl);
      setTopTrackList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(topAlbumsUrl)
      .then((res) => setTopAlbumList(res.data))
      .catch((err) => console.log(err));
      gettopTrack();
  }, []);

  // console.log(topAlbumList);
  console.log(topTrackList);

  return (
    <div className="flex justify-around flex-col">
      <div className="flex justify-start border border-collapse m-2 text-lg ">
        <img src={image?.[0]["#text"]} alt="" />
        <h2>{name}</h2>
      </div>
      <div className="flex justify-around">
        <div>
          <h2>Top Albums</h2>
          <hr />
          {topAlbumList["topalbums"]?.album.map((items, i) => {
            return <TopAlbum key={i} {...items} />;
          })}
        </div>
        <div>
          <h2>Top Tracks</h2>
          <hr />
          {topTrackList["toptracks"]?.track.map((items, i) => {
            return <TopTrack key={i} {...items} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
