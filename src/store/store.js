import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { MovieApi } from '../api/movieApi';

export const store = configureStore({
  reducer: {
    [MovieApi.reducerPath]: MovieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MovieApi.middleware),
});
