import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { searchGames } from '../actions/gamesAction'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faD, faDragon } from '@fortawesome/free-solid-svg-icons'
//import { fadr } from '@fortawesome/fontawesome-svg-core';

function Nav() {

  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) =>{
    setTextInput(e.target.value)
  }
  const submitSearchHandler = (e)=>{
    e.preventDefault();
    dispatch(searchGames(textInput));
    setTextInput("");
  }

  const clearSearchHandler = ()=>{
    dispatch({type : "CLEAR_GAMES"})
  }

  return (
    <motion.div className='Nav px-12 py-30 text-center'>
        <motion.div onClick={clearSearchHandler}>
            <FontAwesomeIcon className='text-[2rem] mt-1 mobile:text-sm' icon={faDragon} />
            <h2 className='mobile:text-sm'>GAMEBUZZ</h2>
        </motion.div>
        <form action='/'>
            <input className='text-[1rem] w-1/4 p-1 my-4 mobile:w-4/5 mobile:p-0.75 mobile:text-[0.5rem]' type='text' value={textInput} onChange={inputHandler}/>
            <button className='text-[1rem] p-1 mobile:p-0.75 mobile:text-[0.5rem]' type='submit' onClick={submitSearchHandler}>Search</button>
        </form>
    </motion.div>
  );
}

export default Nav;
