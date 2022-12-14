import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import LatestSeriesList from './LatestSeriesList';
import { useGetPopularTvSeriesQuery } from '../../../api/movieApi';

const LatestSeries = () => {
  const { data: movies, isLoading } = useGetPopularTvSeriesQuery();

  return (
    <main>
      <form className='ml-10 pt-5 hidden md:block'>
        <input
          className=' py-2 px-5 rounded-full w-2/3 bg-primary md:w-1/4 '
          type='search'
          placeholder='Search for movies, TV shows...'
        />
      </form>

      <h4 className='text-2xl p-5 md:ml-5'>Latest Tv Series</h4>
      {isLoading ? (
        <div style={{ marginLeft: '50%' }}>
          <CircularProgress color='success' />
        </div>
      ) : (
        <div className='px-5 md:px-10 '>
          <Swiper
            spaceBetween={5}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              400: { slidesPerView: 1 },
              800: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className='mySwiper'
          >
            {movies?.results?.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <LatestSeriesList {...movie} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </main>
  );
};

export default LatestSeries;
