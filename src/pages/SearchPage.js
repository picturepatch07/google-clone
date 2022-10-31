import React, { useState } from 'react'
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Search from '../components/Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertTcon from "@material-ui/icons/MoreVert";
import { Link } from 'react-router-dom';

function SearchPage() {
  const {data} = useGoogleSearch(term);
  console.log(data);

  const [{ term }, dispatch] = useStateValue();
  return (
    <div className='searchPage'>
        <div className='searchPage__header'>
            <Link to="/">
              <img
                className='searchPage__logo'
                src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                alt=''
              />
            </Link>

            <div className='searchPage__headerBody'>
              <Search hideButtons />
              <div className='searchPage__options'>
                <div className='searchPage__optionLeft'>
                  <div className='searchPage__option'>
                    <SearchIcon />
                    <link to="/all">All</link>
                  </div>
                  <div className='searchPage__option'>
                    <DescriptionIcon />
                    <Link to="/news">News</Link>
                  </div>
                  <div className='searchPage__option'>
                    <ImageIcon />
                    <Link to="/images">Images</Link>
                  </div>
                  <div className='searchPage__option'>
                    <LocalOfferIcon />
                    <Link to="/shopping">shopping</Link>
                  </div>
                  <div className='searchPage__option'>
                    <RoomIcon />
                    <Link to="/maps">maps</Link>
                  </div>
                  <div className='searchPage__option'>
                    <MoreVertTcon />
                    <Link to="/more">more</Link>
                  </div>
                </div>

                <div className='searchPage__optionsRight'>
                  <div className='searchPage__option'>
                    <Link to="/settings">Settings</Link>
                  </div>
                  <div className='searchPage__option'>
                    <Link to="/tools">Tools</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className='searchPage__results'></div>
    </div>
  )
} 

export default SearchPage;