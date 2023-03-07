const initialState = {
    games:[],
    screenshots : [],
    isLoading : true
}

const detailsReducer = (state=initialState, action) =>{
    switch(action.type){
        case "GET_DETAILS":
            return {
                ...state, 
                games : action.payload.gamedetails,
                screenshots : action.payload.screenshots,
                isLoading : false
            }
        case "LOAD_DETAILS":
            return {
                ...state,
                isLoading : true
            }
        default :
            return {...state}
    }
};

export default detailsReducer;
