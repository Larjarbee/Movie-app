import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Leftbar from './components/nav/Leftbar';
import { CircularProgress } from '@mui/material';

function App() {
  const Home = React.lazy(() => import('./pages/Home'));
  // const LoginPage = React.lazy(() => import('./pages/LoginPage'));
  const Movies = React.lazy(() => import('./pages/Movies'));
  const MovieDetail = React.lazy(() => import('./pages/MovieDetail'));
  const TvSeriess = React.lazy(() => import('./pages/TvSeriess'));
  const TvSeriesDetail = React.lazy(() => import('./pages/TvSeriesDetail'));

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Leftbar />
        <Suspense
          fallback={
            <div style={{ marginLeft: '50%' }}>
              <CircularProgress color='success' />
            </div>
          }
        >
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/' element={<Home />} />
            {/* <Route path='/Login' element={<LoginPage />} /> */}
            <Route path='/Movies' element={<Movies />} />
            <Route path='/Movie/:id' element={<MovieDetail />} />
            <Route path='/Tv-Series' element={<TvSeriess />} />
            <Route path='/Tv-Series/:id' element={<TvSeriesDetail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
