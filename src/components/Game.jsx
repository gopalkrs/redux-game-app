import React from 'react';
import { NavLink } from 'react-router-dom';
import { imageReducer } from '../functionalities';
import { useDispatch, useSelector } from "react-redux";
import { loadGameDetails } from '../actions/detailsAction'
import { motion } from 'framer-motion';

function Game({ name, released, background_image, id }) {

  const dispatch = useDispatch();

  const loadDetailHandler = (e) => {
    document.body.style.overflow = "hidden";
    dispatch(loadGameDetails(id));
  }

  return (
    <NavLink to={`games/${id}`}>
      <motion.div className="shadow-game min-h-[30vh] mobile:min-h-[30vh] text-center rounded-md" onClick={loadDetailHandler} layoutId={id}>
        <img className='w-full rounded-t-md h-[40vh] mobile:h-[30vh]' src={background_image} alt="game-background" />
        <h4 className='mobile:text-[0.75rem]'>{name}</h4>
        <p className='text-[#606060] mobile:text-[0.5rem]'>{released}</p>
      </motion.div>
    </NavLink>
  );
}

export default Game;
