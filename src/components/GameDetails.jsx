import React from 'react';
import { useNavigate } from "react-router-dom";
import { imageReducer } from '../functionalities';
import { useDispatch, useSelector } from "react-redux";
import { loadGameDetails } from '../actions/detailsAction';
import { motion } from 'framer-motion';
import playstation from '../img/playstation.svg';
import xbox from '../img/xbox.svg';
import gamepad from '../img/gamepad.svg';
import pc from '../img/pc.svg';
import apple from '../img/apple.svg';
import linux from '../img/linux.svg'

function GameDetails({gameid}) {

    const { games, screenshots, isLoading } = useSelector(state => state.gamedetails);
    const navigate = useNavigate();

    const exitDetailHandler = (e) =>{
        const element = e.target;
        if(element.classList.contains("GameDetails")){
            document.body.style.overflow = "auto";
            navigate("/");
        }
    }

    const getPlatformIcons=(icons)=>{
        switch(icons){
            case 'PlayStation 4':
                return playstation;
            case 'Xbox One':
                return xbox;
            case 'PC':
                return pc;
            case 'iOS':
                return apple;
            case 'Linux':
                return linux;
            default:
                return gamepad;
        }
    };

    return (
        <>
            {!isLoading &&
                <motion.div className='GameDetails w-full min-h-[100vh] fixed top-0 left-0 bg-boxshadow overflow-y-scroll' layoutId={gameid}  onClick={exitDetailHandler}>
                    <motion.div className='details w-4/5 bg-white absolute left-[10%] rounded-2xl px-20 py-8 mobile:px-2'>
                        <motion.div className='flex justify-between items-center'>
                            <motion.div>
                                <h2 className='mobile:text-[0.75rem]'>{games.name}</h2>
                                <p className='mobile:text-[0.5rem]'>Rating : {games.rating}</p>
                            </motion.div>
                            <motion.div className='text-center'>
                                <h4 className='mobile:text-[0.5rem]'>Platforms</h4>
                                <motion.div className='flex justify-evenly gap-4 mobile:gap-2'>
                                    {games.platforms.map((data) => (
                                        <img alt='game-platforms' className='w-6 mobile:w-2' key={data.platform.id} src={getPlatformIcons(data.platform.name)}/>
                                    ))
                                    }
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div className='mt-8'>
                            <img className='w-full h-[60vh] object-cover mobile:h-[auto]' src={imageReducer(games.background_image, 1280)} alt={games.name} />
                        </motion.div>
                        <motion.div className='my-8 mobile:my-4'>
                            <p className='mobile:text-xs'>{games.description_raw}</p>
                        </motion.div>
                        <motion.div className='grid grid-cols-3 gap-3 mobile:grid-cols-1'>
                            {screenshots.map((data) => (
                                <img layoutId={`image-${gameid}`} className='' src={imageReducer(data.image, 420)} alt='screen_shot' key={data.id} />
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            }
        </>
    );
}
export default GameDetails;