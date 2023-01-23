import { Avatar } from '@material-ui/core';
import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import "./Home.css";
import Search from './Search';



function Home() {
  return (
    <div className='home'>
        <div className='home_header'>
            <div className='home_headerLeft'>
              <p>About</p>
              <p>Store</p>
            </div>
            <div className='home_headerRight'>
              <p>Gmail</p>
              <p>Images</p> 
              <AppsIcon/>
              <Avatar/>
            </div>
        </div>
        <div className='home_body'>
          <img src='https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'/>
          <div className='home_inputContainer'>
             <Search/>
          </div>
        </div>
    </div>
  )
}

export default Home