import React from 'react';
import { useGetTopRatedMoviesQuery } from '../../../api/movieApi';
import { CircularProgress } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TopRatedMovieList from './TopRatedList';

const TopRatedMovies = () => {
  const { data: movies, isLoading } = useGetTopRatedMoviesQuery();

  return (
    <main>
      <h4 className='text-2xl p-5 md:ml-5'>Top Rated</h4>
      {isLoading ? (
        <div style={{ marginLeft: '50%' }}>
          <CircularProgress color='success' />
        </div>
      ) : (
        <div className=' px-5 md:px-10 '>
          <Swiper
            spaceBetween={5}
            breakpoints={{
              400: { slidesPerView: 3 },
              600: { slidesPerView: 4 },
              800: { slidesPerView: 5 },
              1200: { slidesPerView: 6 },
            }}
            className='mySwiper'
          >
            {movies?.results?.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <TopRatedMovieList {...movie} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </main>
  );
};

export default TopRatedMovies;
