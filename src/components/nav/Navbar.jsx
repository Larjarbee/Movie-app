import { useState } from 'react';
import { Tooltip } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <nav className='fixed flex justify-between py-2 top-0 z-50 w-full bg-primary md:hidden'>
      <div>
        <button
          className=' ml-3 p-3 hover:text-green-500'
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <MenuIcon fontSize='large' />
        </button>

        {showDrawer && (
          <>
            <div
              onClick={() => setShowDrawer(false)}
              className='fixed h-full w-full bg-black opacity-70 top-16 mt-1 md:hidden'
            />
            <aside className='trans fixed h-full bg-primary'>
              <Link
                onClick={() => setShowDrawer(false)}
                to='/'
                className='flex gap-3 p-6  hover:bg-green-500'
              >
                <Tooltip title='HOME' placement='right'>
                  <HomeOutlinedIcon fontSize='large' />
                </Tooltip>
              </Link>
              <Link
                onClick={() => setShowDrawer(false)}
                to='/Movies'
                className='flex gap-3 p-6 hover:bg-green-500'
              >
                <Tooltip title='MOVIE' placement='right'>
                  <SlideshowOutlinedIcon fontSize='large' />
                </Tooltip>
              </Link>
              <Link
                onClick={() => setShowDrawer(false)}
                to='/Tv-Series'
                className='flex gap-3 p-6 hover:bg-green-500'
              >
                <Tooltip title='TV SERIES' placement='right'>
                  <LiveTvOutlinedIcon fontSize='large' />
                </Tooltip>
              </Link>
              <div className='flex gap-3 p-6 hover:bg-green-500'>
                <Tooltip title='REMAINDER' placement='right'>
                  <CalendarMonthOutlinedIcon fontSize='large' />
                </Tooltip>
              </div>
              <div className='flex gap-3 p-6 hover:bg-green-500'>
                <Tooltip title='LOGOUT' placement='right'>
                  <LogoutOutlinedIcon fontSize='large' />
                </Tooltip>
              </div>
            </aside>
          </>
        )}
      </div>
      <form className=' mt-3 mr-2'>
        <input
          className=' py-2 px-8 rounded-full w-full bg-sec'
          type='search'
          placeholder='Search for movies, TV shows...'
        />
      </form>
    </nav>
  );
};

export default Navbar;
