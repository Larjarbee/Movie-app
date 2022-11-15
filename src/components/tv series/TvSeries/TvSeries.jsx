import LatestSeries from '../latestTvSeries/LatestSeries';
import TopRatedSeries from '../topRatedTvSeries/TopRatedSeries';

const TvSeries = () => {
  return (
    <div className='w-full mt-16 ml-0 md:ml-10 md:mt-0'>
      <LatestSeries />
      <TopRatedSeries />
    </div>
  );
};

export default TvSeries;
