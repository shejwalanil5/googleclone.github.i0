import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@material-ui/core';
import { useStateValue } from '../StateProvider.js';
import { actionTypes } from '../Reducer';


function Search({hidebuttons}) {
const[{},dispatch]= useStateValue();
  const [input, setInput]= useState("");
  const history = useNavigate();
  const search=(e)=>{
    e.preventDefault();
    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term: input
    })
    history("/search");
  }
  return (
    <form className='search'>
       <div className='search_input'>
       <SearchIcon className='searchicon'/>
        <input value={input} onChange={e=>setInput(e.target.value)}/>
        <MicIcon/>
       </div>
      {  
      !hidebuttons ? (<div className='search_buttons'>
        <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>

        <Button variant='outlined'>I am feeling lucky</Button>
       </div>) : (
          <div className='search_buttons' style={{display: 'none'}}>
          <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
         </div>
       )
      }
    </form>
  )
}

export default Search;