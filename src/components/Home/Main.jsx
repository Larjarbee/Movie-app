import Navbar from '../nav/Navbar';
import LatestMovies from './latest/LatestMovies';
import TopRatedMovie from './top-rated/TopRated';
import TrendingMovies from './trending/TrendingMovies';

const Main = () => {
  return (
    <div className='w-full mt-16 ml-0 md:ml-10 md:mt-0'>
      <TrendingMovies />
      <TopRatedMovie />
      <LatestMovies />
    </div>
  );
};

export default Main;
