import React from 'react';
import { Link } from "react-router-dom";
import Search from './Search';
import "./SearchPage.css";
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useStateValue } from '../StateProvider.js';
import useGoogleSearch from '../useGoogleSearch';
import { ListItemSecondaryAction } from '@mui/material';


function SearchPage() {

  const [{term}] = useStateValue();
  const { data } =useGoogleSearch(term);

  console.log(term);
  return (
    <div className='searchPage'>
      <div className='searchPage_header'>
        <Link to="/">
          <img src='https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' />
        </Link>
        <div className='searchPage_headerBody'>
          <Search hidebuttons />
          <div className='searchPage_optionLeft'>
            <div className='searchPage_option'>
              <SearchIcon />
              <Link to='all'>All</Link>
            </div>
            <div className='searchPage_option'>
              <DescriptionIcon />
              <Link to='all'>News</Link>
            </div>
            <div className='searchPage_option'>
              <ImageIcon />
              <Link to='all'>Images</Link>
            </div>
            <div className='searchPage_option'>
              <LocalOfferIcon />
              <Link to='all'>Shopping</Link>
            </div>
            <div className='searchPage_option'>
              <RoomIcon />
              <Link to='all'>Maps</Link>
            </div>
            <div className='searchPage_option'>
              <MoreVertIcon />
              <Link to='all'>More</Link>
            </div>
          </div>
        </div>
        <div className='searchPage_optionsRight'>
          <div className='searchPage_option'>
            <Link to="/settings">Settings</Link>
          </div>
          <div className='searchPage_option'>
            <Link to="/tools">Tools</Link>
          </div>
        </div>
      </div>

{
  term && (
      <div className='searchPage_results'>
        <p className='searchPage_resultCount'>
        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) 
        for {term}
        </p>
        {
          data?.items.map((item)=>(
             <div className='searchPage_result'>
            <a href={item.link} className='searchPage_resultLink'>

              {item.pagemap?.cse_image?.lenght > 0 && item.pagemap?.cse_image[0]?.src && (
                              <img src={item.pagemap?.cse_image[0]?.src} className='searchPage_resultImg' alt=""/>

              )}
              
              {item.displayLink}
            </a>
            <a href={item.link} className='searchPage_resulttitle'>
              <h2>{item.title}</h2>
            </a>
            <p className='searchPage_resultdescription'>{item.snippet}</p>
          </div>
          ))
        }



     
      </div>)
      }
    </div>
  )
}

export default SearchPage;