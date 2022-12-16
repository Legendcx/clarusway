import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const ArtistCard = ({image, name, listeners, playcount}) => {

  return (
    <div>
      <Link
        to="details"
        className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image?.[0]["#text"]}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Artist
          </h3>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {listeners}
          </h3>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {playcount}
          </h5>
          </div>
        
      </Link>
    </div>
  );
};

export default ArtistCard;