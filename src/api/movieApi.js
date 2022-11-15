import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const MovieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),

  endpoints: (builder) => ({
    getTrendingMovies: builder.query({
      query: () => '/trending/all/day?api_key=d2e2d8a66a2176492ffafd8be2ab424e',
    }),
    getMovieDetail: builder.query({
      query: (id) =>
        `/movie/${id}?api_key=d2e2d8a66a2176492ffafd8be2ab424e&language=en-US&append_to_response`,
    }),

    getTopRatedMovies: builder.query({
      query: () => '/movie/top_rated?api_key=d2e2d8a66a2176492ffafd8be2ab424e',
    }),

    getLatestMovies: builder.query({
      query: () =>
        '/movie/popular?api_key=d2e2d8a66a2176492ffafd8be2ab424e&language=en-US&page=1',
    }),

    getPopularTvSeries: builder.query({
      query: () =>
        '/tv/popular?api_key=d2e2d8a66a2176492ffafd8be2ab424e&language=en-US',
    }),

    getTopRatedTvSeries: builder.query({
      query: () =>
        '/tv/top_rated?api_key=d2e2d8a66a2176492ffafd8be2ab424e&language=en-US',
    }),

    getTvSeriesDetail: builder.query({
      query: (id) =>
        `/tv/${id}?api_key=d2e2d8a66a2176492ffafd8be2ab424e&language=en-US`,
    }),

    getTvSeriesSeasonDetail: builder.query({
      query: (id, num) =>
        `/tv/${id}/season/${num}?api_key=d2e2d8a66a2176492ffafd8be2ab424e&language=en-US`,
    }),
  }),
});

export const {
  useGetTrendingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetMovieDetailQuery,
  useGetLatestMoviesQuery,
  useGetPopularTvSeriesQuery,
  useGetTopRatedTvSeriesQuery,
  useGetTvSeriesDetailQuery,
  useGetTvSeriesSeasonDetailQuery,
} = MovieApi;
