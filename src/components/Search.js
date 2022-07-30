import React from 'react'
import '../pages/Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';

function Search() {
  return (
    <div className='search'>
        <div className='search__input'>
            <SearchIcon className='search__inputIcon' />
            <input />
            <MicIcon />
        </div>

        <div className='search__button'>
            <Button variant='outlined' type='Submit'>Google Search</Button>
            <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
    </div>
  )
}

export default Search