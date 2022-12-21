// import React, { useEffect, useState } from "react";
// import ArtistCard from "../components/cards/ArtistCard";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchStart, fetchSuccess, fetchError } from "../features/fetchSlice";

// const Home = () => {
//   // const { fetchStart, fetchSuccess, fetchError } = useSelector(
//   //   (state) => state.lastfm
//   // );
//   const { artist, loading } = useSelector((state) => state.lastfm);
//   const [pageParam, setPageParam] = useState(1);
//   // const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   // const API_KEY = process.env.REACT_APP_apiKey;
//   const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=de8c75d37f68b2e7258f4aaa3f91f258&page=${pageParam}&limit=5&format=json`;

//   const getTopArtist = async () => {
//     dispatch(fetchStart());
//     try {
//       const { data } = await axios(url);
//       const {
//         artists: { artist },
//       } = data;
//       console.log(artist);
//       dispatch(fetchSuccess(artist));
//     } catch (error) {
//       console.log(error);
//       dispatch(fetchError());
//     }
//   };
//   const handleScroll = () => {
//     // console.log("heigth:", document.documentElement.scrollHeight);
//     // console.log("top:", document.documentElement.scrollTop);
//     // console.log(window.innerHeight);
//     if (
//       window.innerHeight + document.documentElement.scrollTop + 1 >=
//       document.documentElement.scrollHeight
//     ) {
//       dispatch(fetchStart());
//       pageParam < 11 && setPageParam((prev) => prev + 1);
//     }
//   };
//   console.log(pageParam);
//   useEffect(() => {
//     getTopArtist();
//     // eslint-disable-next-line
//   }, [pageParam]);
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//     // eslint-disable-next-line
//   }, []);

//   return (
//     <div>
//       <h1>Artist List</h1>
//       {artist?.map((item, index) => (
//         <ArtistCard key={index} {...item} />
//       ))}
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import ArtistCard from "../components/cards/ArtistCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchError } from "../features/fetchSlice";

const Home = () => {
  const [pageParam, setPageParam] = useState(1);
  const [artistState, setArtistState] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // const API_KEY = process.env.REACT_APP_apiKey;
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=de8c75d37f68b2e7258f4aaa3f91f258&page=${pageParam}&limit=10&format=json`;
  const getTopArtist = async () => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      const {
        artists: { artist },
      } = data;
      if (pageParam === 1) {
        setArtistState([...artistState, ...artist.slice(0, 10)]);
        //console.log(artist.slice(0, 5));
        setLoading(false);
      } else {
        setArtistState([
          ...artistState,
          ...artist.slice((pageParam - 1) * 10, pageParam * 10),
        ]);
        setLoading(false);
        if (pageParam === 6) {
          setPageParam(1);
        }
      }
      console.log(artistState);
    } catch (error) {
      console.log(error);
      setLoading(false);
      dispatch(fetchError());
    }
  };
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPageParam((prev) => prev + 1);
    }
  };
  console.log(pageParam);
  useEffect(() => {
    getTopArtist();
    // eslint-disable-next-line
  }, [pageParam]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    //   // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>Artist List</h1>
      {artistState?.map((item, index) => (
        <ArtistCard key={index} {...item} />
      ))}
      {loading && <h2>loading</h2>}
    </div>
  );
};

export default Home;