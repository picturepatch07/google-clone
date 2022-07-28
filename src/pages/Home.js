import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';

function Home() {
  return (
    <div className='home'>
      <h1>This is HOMEPAGE</h1>
      <div className='home__header'>
        <div className='home__headerleft'>
          {/*Link*/}
          <Link to='/about'>About</Link>
          {/*Link*/}
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__headerright'>
          {/*Link*/}
          <Link to='/gmail'>Gmail</Link>
          {/*Link*/}
          <Link to='/images'>Images</Link>
          {/*Icon*/}
          <AppsIcon />
          <Avatar />
          {/*Avatar*/}
        </div>
      </div>
      <div className='home__body'>
      </div>
    </div>
  )
}

export default Home