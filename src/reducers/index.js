import { combineReducers } from "redux";
import gamesReducer from './gamesReducer'
import detailsReducer from "./detailsReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    gamedetails: detailsReducer
});

export default rootReducer;