import { Rating } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const LatestMovieList = ({
  poster_path,
  title,
  name,
  release_date,
  vote_average,
  id,
}) => {
  const url = 'https://image.tmdb.org/t/p//w500/';

  return (
    <Link to={`${`/Movie/${id}`}`}>
      <div className=' rounded-lg hover:opacity-50 '>
        <div className='mb-10 rounded-lg '>
          <div className=' rounded-lg'>
            <div className=' w-full overflow-hidden'>
              <img
                className='effect rounded-lg'
                src={url + poster_path}
                alt='img'
                width={200}
                loading='lazy'
              />
            </div>
            <div>
              <h1 className=' text-white text-sm'>{title || name}</h1>
              <div className='flex justify-between align-middle'>
                <span className=' text-gray-400 text-xs'>{release_date}</span>
                <div className='flex align-middle mr-3'>
                  <span className=' text-sm'>{vote_average}</span>
                  <span>
                    <Rating
                      name='half-rating-read'
                      defaultValue={vote_average}
                      precision={0.5}
                      max={1}
                      readOnly
                      size='small'
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LatestMovieList;
