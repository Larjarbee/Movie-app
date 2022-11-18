import { useState } from 'react';
import YouTube from 'react-youtube';
import { useGetMovieDetailQuery } from '../../api/movieApi';
import { useParams } from 'react-router-dom';
import { CircularProgress, IconButton, Rating } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const MovieDetail = () => {
  const [value, setValue] = useState(5);
  const [playing, setPlaying] = useState(false);
  const { id } = useParams();

  const { data: movies, isLoading } = useGetMovieDetailQuery(id);

  const {
    name,
    title,
    backdrop_path,
    poster_path,
    release_date,
    genres,
    overview,
    vote_average,
    videos,
  } = {
    ...movies,
  };

  const url = 'https://image.tmdb.org/t/p//w500/';

  const trailer = videos?.results.find(
    (vid) => vid.name === 'Official Trailer'
  );

  const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };

  return (
    <>
      <div
        className=' h-96 w-auto'
        style={{
          backgroundImage: `url( ${url + backdrop_path})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className='h-96 rounded-lg bg-gradient-to-t from-black ...' />

        {playing && (
          <YouTube
            videoId={trailer?.key}
            className='h-96 rounded-lg absolute top-0 left-0 right-0 bottom-0'
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 1,
              },
            }}
            onReady={videoOnReady}
          />
        )}
      </div>
      {playing && (
        <div className=' px-5 pb-5 w-full ml-0 md:ml-20'>
          <IconButton>
            <CloseIcon
              fontSize='large'
              color='success'
              onClick={() => {
                setPlaying(false);
                window.scrollTo(0, 0);
              }}
            />
          </IconButton>
        </div>
      )}

      <div className=' mb-10 md:ml-20'>
        {isLoading ? (
          <div style={{ marginLeft: '50%' }}>
            <CircularProgress color='success' />
          </div>
        ) : (
          <div className='flex flex-col justify-center w-full md:flex-row md:w-2/3 md:m-auto'>
            <img
              className='rounded-lg mx-auto'
              src={url + poster_path}
              alt='img'
              width={400}
            />
            <div className=' mx-10 md:mx-5'>
              <h1 className=' text-white text-4xl'>{title || name}</h1>
              <div className=' my-5'>
                {genres?.map((genre) => (
                  <span
                    className=' p-1 px-2 ml-3 border-2 rounded-full border-sec text-white'
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              <div className='flex align-middle'>
                <span className=' text-gray-400 text-xs mr-5'>
                  {release_date}
                </span>

                <span>
                  <Rating
                    value={value}
                    onChange={() => {
                      setValue(vote_average);
                    }}
                    precision={0.5}
                    max={5}
                    size='small'
                  />
                </span>
              </div>
              <div className='my-5'>
                <h1 className=' text-2xl '>Overview:</h1>
                <h2 className='text-white text-justify'>{overview}</h2>
              </div>
              {trailer ? (
                <button
                  className=' py-4 px-7 text-white bg-sec hover:opacity-80'
                  onClick={() => {
                    setPlaying(true);
                    window.scrollTo(0, 0);
                  }}
                >
                  Play Trailer
                </button>
              ) : (
                'Sorry, no trailer available'
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieDetail;
