import { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
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
    <nav className='fixed flex justify-between py-1 top-0 z-50 w-full bg-primary md:hidden'>
      <div>
        <div className=' px-4  hover:bg-green-500'>
          <IconButton
            size='large'
            edge='start'
            onClick={() => setShowDrawer(!showDrawer)}
          >
            <MenuIcon />
          </IconButton>
        </div>

        {showDrawer && (
          <aside className='fixed h-full bg-primary'>
            <Link
              onClick={() => setShowDrawer(false)}
              to='/'
              className='flex gap-3 p-5 hover:bg-green-500'
            >
              <Tooltip title='HOME' placement='right'>
                <HomeOutlinedIcon />
              </Tooltip>
            </Link>
            <Link
              onClick={() => setShowDrawer(false)}
              to='/Movies'
              className='flex gap-3 p-5 hover:bg-green-500'
            >
              <Tooltip title='MOVIE' placement='right'>
                <SlideshowOutlinedIcon />
              </Tooltip>
            </Link>
            <Link
              onClick={() => setShowDrawer(false)}
              to='/Tv-Series'
              className='flex gap-3 p-5 hover:bg-green-500'
            >
              <Tooltip title='TV SERIES' placement='right'>
                <LiveTvOutlinedIcon />
              </Tooltip>
            </Link>
            <div className='flex gap-3 p-5 hover:bg-green-500'>
              <Tooltip title='REMAINDER' placement='right'>
                <CalendarMonthOutlinedIcon />
              </Tooltip>
            </div>
            <div className='flex gap-3 p-5 hover:bg-green-500'>
              <Tooltip title='LOGOUT' placement='right'>
                <LogoutOutlinedIcon />
              </Tooltip>
            </div>
          </aside>
        )}
      </div>
      <form className=' mt-2 mr-2'>
        <input
          className=' py-1 px-5 rounded-full w-full bg-sec'
          type='search'
          placeholder='Search for movies, TV shows...'
        />
      </form>
    </nav>
  );
};

export default Navbar;
