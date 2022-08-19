import React, { useState } from 'react'
import '../pages/Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from '../pages/reducer';

function Search ({hideButtons = false}) {

    const [{}, dispatch] = useStateValue();
    const [term, setTerm] = useState("");
    const history = useHistory();


    const search = (e) => {
        e.preventDefault();
        console.log("search!!")

        dispatch ({
            type: actionTypes.SET_SEARCH_TERM,
            term: term,
        });
        
        history.push("/search")
    };

  return (
    <form className='search'>
        <div className='search__input'>
            <SearchIcon className='search__inputIcon' />
            <input value={input} onChange={e => setInput(e.target.value)} />
            <MicIcon />
        </div>

        {!hideButtons ? (
            <div className='search__buttons'>
                <Button 
                onClick={search}
                variant='outlined'
                type='submit'>
                    Google Search
                </Button>
                <Button
                variant='outlined'>
                    I'm Feeling Lucky
                </Button>
            </div>
        ) : (
            <div className='search__buttons'>
            <Button 
            className='search__buttonsHidden'
            onClick={search} 
            variant='outlined' 
            type='Submit'>
                Google Search
            </Button>
            <Button
            className='search__buttonsHidden' 
            variant='outlined'>
                I'm Feeling Lucky
            </Button>
            </div>
        )}
    </form>
  )
}

export default Search