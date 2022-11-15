import React from 'react';
import { Link } from 'react-router-dom';

const LatestSeriesList = ({
  poster_path,
  backdrop_path,
  title,
  name,
  release_date,
  id,
}) => {
  const url = 'https://image.tmdb.org/t/p//w500/';

  return (
    <Link to={`${`/Tv-Series/${id}`}`}>
      <div
        className=' h-52 w-auto rounded-lg hover:opacity-50 '
        style={{
          backgroundImage: `url( ${url + backdrop_path})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className='h-96 rounded-lg bg-gradient-to-t from-black ...'>
          <div className='flex justify-center items-center gap-5 p-10 rounded-lg'>
            <img
              className='rounded-lg'
              src={url + poster_path}
              alt='img'
              width={100}
            />

            <h1 className=' text-white text-4xl'>{title || name}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LatestSeriesList;
