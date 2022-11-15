import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {
  useGetLatestMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetTrendingMoviesQuery,
} from '../../api/movieApi';
import LatestMovieList from '../Home/latest/LatestMovieList';
import TopRatedMovieList from '../Home/top-rated/TopRatedList';

const Movies = () => {
  const [showTopRated, setShowTopRated] = useState(false);

  const { data: movies, isLoading } = useGetLatestMoviesQuery();
  const { data: topMovies, isLoading: TopLoad } = useGetTopRatedMoviesQuery();

  const showTopRatedHandler = () => {
    setShowTopRated(true);
  };

  return (
    <div className='w-full mt-14 ml-0 md:ml-10 md:mt-0'>
      <h4 className='ml-5 text-4xl p-5'>Movies</h4>

      {isLoading ? (
        <div style={{ marginLeft: '50%' }}>
          <CircularProgress color='success' />
        </div>
      ) : (
        <>
          <div className='grid grid-cols-3 gap-1 px-5 md:grid-cols-6 md:px-10'>
            {movies?.results?.map((movie) => {
              return (
                <div key={movie.id}>
                  <LatestMovieList {...movie} />
                </div>
              );
            })}
          </div>
          {!showTopRated && (
            <button
              onClick={showTopRatedHandler}
              style={{ marginLeft: '40%' }}
              className=' p-1 px-2 mb-10 text-sm border-2 rounded-full border-sec text-white'
            >
              Load more
            </button>
          )}
        </>
      )}

      {showTopRated &&
        (TopLoad ? (
          <div style={{ marginLeft: '50%' }}>
            <CircularProgress color='success' />
          </div>
        ) : (
          <div className='grid grid-cols-3 gap-1 px-5 md:grid-cols-6 md:px-10'>
            {topMovies?.results?.map((movie) => {
              return (
                <div key={movie.id}>
                  <TopRatedMovieList {...movie} />
                </div>
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default Movies;
