import React, { useEffect } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useLocation, useParams } from 'react-router-dom';
import Game from './Game';
import GameDetails from './GameDetails';
//Redux logic
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from '../actions/gamesAction';

function Homepage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searchgame } = useSelector((state) => state.games);
  const { gameid } = useParams();

  return (
    <motion.div className="py-0 px-8 mobile:px-4">
      <AnimateSharedLayout>
        <AnimatePresence>{gameid && <GameDetails gameid={gameid} />}</AnimatePresence>
        {
          searchgame.length ? (
            <div>
              <h2 className='py-20 px-0 mobile:text-sm'>Searched Games</h2>
              <motion.div className='min-h-[80vh] grid grid-cols-gamelists gap-6 mobile:grid-cols-mobile'>
                {searchgame.map((game) => (
                  <Game name={game.name} released={game.released} background_image={game.background_image} id={game.id} key={game.id} />
                ))}
              </motion.div>
            </div>
          ) : ( "" )
        }
        <motion.div>
          <h2 className='py-20 px-0 mobile:text-sm'>Upcoming Games</h2>
          <motion.div className='min-h-[80vh] grid grid-cols-gamelists gap-6 mobile:grid-cols-mobile'>
            {upcoming.map((game) => (
              <Game name={game.name} released={game.released} background_image={game.background_image} id={game.id} key={game.id} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div>
          <h2 className='py-20 px-0 mobile:text-sm'>Popular Games</h2>
          <motion.div className='min-h-[80vh] grid grid-cols-gamelists gap-6 mobile:grid-cols-mobile'>
            {popular.map((game) => (
              <Game name={game.name} released={game.released} background_image={game.background_image} id={game.id} key={game.id} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div>
          <h2 className='py-20 px-0 mobile:text-sm'>New Games</h2>
          <motion.div className='min-h-[80vh] grid grid-cols-gamelists gap-6 mobile:grid-cols-mobile'>
            {newGames.map((game) => (
              <Game name={game.name} released={game.released} background_image={game.background_image} id={game.id} key={game.id} />
            ))}
          </motion.div>
        </motion.div>
      </AnimateSharedLayout>
    </motion.div>
  );
}

export default Homepage;
