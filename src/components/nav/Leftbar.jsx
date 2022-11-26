import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { NavLink } from 'react-router-dom';

const Leftbar = () => {
  return (
    <aside className='fixed h-full bg-primary hidden  md:block'>
      <NavLink
        to='/'
        className={(navData) =>
          navData.isActive
            ? 'flex gap-3 p-5 bg-green-500'
            : 'flex gap-3 p-5 hover:bg-green-500'
        }
      >
        <Tooltip title='HOME' placement='right'>
          <HomeOutlinedIcon />
        </Tooltip>
      </NavLink>
      <NavLink
        to='/Movies'
        className={(navData) =>
          navData.isActive
            ? 'flex gap-3 p-5 bg-green-500'
            : 'flex gap-3 p-5 hover:bg-green-500'
        }
      >
        <Tooltip title='MOVIE' placement='right'>
          <SlideshowOutlinedIcon />
        </Tooltip>
      </NavLink>
      <NavLink
        to='/Tv-Series'
        className={(navData) =>
          navData.isActive
            ? 'flex gap-3 p-5 bg-green-500'
            : 'flex gap-3 p-5 hover:bg-green-500'
        }
      >
        <Tooltip title='TV SERIES' placement='right'>
          <LiveTvOutlinedIcon />
        </Tooltip>
      </NavLink>
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
  );
};

export default Leftbar;
