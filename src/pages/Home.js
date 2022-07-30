import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import Search from '../components/Search';

function Home() {
  return (
    <div className='home'>
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
          {/*Avatar*/}
          <Avatar />
        </div>
      </div>
      <div className='home__body'>
        <img
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' 
          alt=''
        />
        <div className='home__inputContainer'> 
          {/*Search*/}
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Home