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
      <motion.div className="shadow-game min-h-[30vh] mobile:min-h-[20vh] text-center rounded-md" onClick={loadDetailHandler} layoutId={id}>
        <img className='w-full rounded-t-md h-[40vh] mobile:h-[20vh]' src={background_image} alt="game-background" />
        <h4 className='text-sm'>{name}</h4>
        <p className='text-[#606060] text-xs'>{released}</p>
      </motion.div>
    </NavLink>
  );
}

export default Game;
