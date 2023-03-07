const initialState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searchgame: []
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames
            };
        case "SEARCH_GAMES":
            return {
                ...state,
                searchgame: action.payload.searchgame
            };
        case "CLEAR_GAMES":
            return {
                ...state,
                searched: [],
            };
        default:
            return { ...state };
    }
};

export default gamesReducer;
