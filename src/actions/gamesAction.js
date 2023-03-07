import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGamesURL } from '../api';

export const loadGames = () => async (dispatch) =>{
    const popularGamesData = await axios.get(popularGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    dispatch({
        type : "FETCH_GAMES",
        payload : {
            popular : popularGamesData.data.results,
            upcoming : upcomingGamesData.data.results,
            newGames : newGamesData.data.results
        }
    });
}

export const searchGames = (game_name) => async(dispatch)=>{
    const searchGameData = await axios.get(searchGamesURL(game_name));

    dispatch({
        type : "SEARCH_GAMES",
        payload : {
            searchgame : searchGameData.data.results
        },
    });
}