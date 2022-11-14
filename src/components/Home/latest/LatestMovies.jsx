import React from 'react';
import { useGetLatestMoviesQuery } from '../../../api/movieApi';
import CircularProgress from '@mui/material/CircularProgress';
import LatestMovieList from './LatestMovieList';

const LatestMovies = () => {
  const { data: movies, isLoading } = useGetLatestMoviesQuery();

  return (
    <main>
      <h4 className='ml-5 text-2xl p-5'>Latest</h4>
      {isLoading ? (
        <div style={{ marginLeft: '50%' }}>
          <CircularProgress color='success' />
        </div>
      ) : (
        <div className='grid grid-cols-3 gap-1 px-5 md:grid-cols-6 md:px-10'>
          {movies?.results?.map((movie) => {
            return (
              <div key={movie.id}>
                <LatestMovieList {...movie} />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default LatestMovies;
