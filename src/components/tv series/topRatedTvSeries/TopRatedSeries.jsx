import React from 'react';
import { useGetTopRatedTvSeriesQuery } from '../../../api/movieApi';
import CircularProgress from '@mui/material/CircularProgress';
import TopRatedSeriesList from './TopRatedSeriesList';

const TopRatedSeries = () => {
  const { data: movies, isLoading } = useGetTopRatedTvSeriesQuery();

  return (
    <main>
      <h4 className='text-2xl p-5 md:ml-5'>Top Rated Tv Series</h4>
      {isLoading ? (
        <div style={{ marginLeft: '50%' }}>
          <CircularProgress color='success' />
        </div>
      ) : (
        <div className='grid grid-cols-3 gap-1 px-5 md:grid-cols-6 md:px-10'>
          {movies?.results?.map((movie) => {
            return (
              <div key={movie.id}>
                <TopRatedSeriesList {...movie} />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default TopRatedSeries;
