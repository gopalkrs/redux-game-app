import axios from "axios";
import { gamedetailsURL, gameScreenshotsURL } from '../api';

export const loadGameDetails = (id) => async (dispatch) =>{

    dispatch({
        type: "LOAD_DETAILS"
    });
    const detailsData = await axios.get(gamedetailsURL(id));
    const screenshotsData = await axios.get(gameScreenshotsURL(id));
    
    dispatch({
        type : "GET_DETAILS",
        payload : {
            gamedetails : detailsData.data,
            screenshots : screenshotsData.data.results
        }
    });
}