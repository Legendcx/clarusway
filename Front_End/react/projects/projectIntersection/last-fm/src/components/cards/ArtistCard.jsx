import React from "react";
import { useNavigate } from "react-router-dom";
const ArtistCard = ({ image, name, listeners, playcount, mbid}) => {

  const navigate = useNavigate()
  // console.log();
  return (
    <div className="flex justify-center my-4 ">
      <div
      onClick= {() =>navigate(`details/${name}`, {state:image})}
      
        className="flex flex-col items-center w-2/5 bg-rose-500 border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-200 dark:border-gray-700 dark:bg-rose-500 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image?.[0]["#text"]}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Artist
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-white">
            {name}
          </p>

        </div>

        <div className="flex flex-col justify-between p-4 leading-normal">

          <p className="mb-3 font-normal text-gray-700 dark:text-white">
            listeners : {listeners}
          </p>

          <p className="mb-3 font-normal text-gray-700 dark:text-white">
            playcount : {playcount}
          </p>

        </div>
      </div>
    </div>
  )
}
export default ArtistCard;