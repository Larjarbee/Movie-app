import { useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
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
      <div className=' ml-2'>
        <IconButton
          size='large'
          edge='start'
          onClick={() => setShowDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor='left'
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
        >
          <aside className='fixed h-full bg-primary'>
            <Link to='/' className='flex gap-3 p-5 hover:bg-green-500 ...'>
              <HomeOutlinedIcon />
            </Link>
            <Link
              to='/Movies'
              className='flex gap-3 p-5 hover:bg-green-500 ... '
            >
              <SlideshowOutlinedIcon />
            </Link>
            <div className='flex gap-3 p-5 hover:bg-green-500 ... '>
              <LiveTvOutlinedIcon />
            </div>
            <div className='flex gap-3 p-5 hover:bg-green-500 ... '>
              <CalendarMonthOutlinedIcon />
            </div>
            <div className='flex gap-3 p-5 hover:bg-green-500 ... '>
              <LogoutOutlinedIcon />
            </div>
          </aside>
        </Drawer>
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
