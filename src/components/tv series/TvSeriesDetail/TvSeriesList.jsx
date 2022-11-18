import React from 'react';

const TvSeriesList = ({ poster_path, name, air_date }) => {
  const url = 'https://image.tmdb.org/t/p//w500/';

  return (
    <>
      <div className=' rounded-lg hover:opacity-50 '>
        <div className='mb-10 rounded-lg '>
          <div className=' rounded-lg'>
            <img
              className='rounded-lg'
              src={url + poster_path}
              alt='img'
              width={200}
              loading='lazy'
            />
            <div className='flex justify-between px-1'>
              <h1 className=' text-white text-sm'>{name}</h1>
              <span className=' text-gray-400 text-xs'>{air_date}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TvSeriesList;
