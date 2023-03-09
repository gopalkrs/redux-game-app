import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { searchGames } from '../actions/gamesAction'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import { fadeIn } from '../animations';

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
    <motion.div className='Nav px-12 py-30 text-center' variants={fadeIn} initial="hidden" animate="show">
        <motion.div className='flex justify-center p-1' onClick={clearSearchHandler}>
            <FontAwesomeIcon className='text-[1.5rem] mobile:text-sm' icon={faDragon} />
            <h2 className='mobile:text-sm'>CARRGO</h2>
        </motion.div>
        <form action='/'>
            <input className='text-[1rem] w-1/4 p-1 my-4 mobile:w-2/3 mobile:p-0.5 mobile:text-[0.75rem]' type='text' value={textInput} onChange={inputHandler}/>
            <button className='text-[1rem] p-1 mobile:p-0.5 mobile:text-[0.75rem]' type='submit' onClick={submitSearchHandler}>Search</button>
        </form>
    </motion.div>
  );
}

export default Nav;
