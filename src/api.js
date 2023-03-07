

//Popular Games
const getCurrentMonth = () =>{
    const month = new Date().getMonth() + 1;
    if(month<10){
        return `0${month}`;
    }
    return month;
}

const getCurrentDay = () =>{
    const day = new Date().getDate();
    if(day<10){
        return `0${day}`;
    }
    return day;
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`;
const prevYear = `${currentYear-3}-${currentMonth}-${currentDay}`;

const popular_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${prevYear},${currentDate}&ordering=-rating&page_size=12`;
const upcoming_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const new_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesURL = () => `${process.env.REACT_APP_API_URL}${popular_games}`;
export const upcomingGamesURL = () => `${process.env.REACT_APP_API_URL}${upcoming_games}`;
export const newGamesURL = () => `${process.env.REACT_APP_API_URL}${new_games}`;

export const gamedetailsURL = (game_id) => `${process.env.REACT_APP_API_URL}games/${game_id}?key=${process.env.REACT_APP_API_KEY}`;
export const gameScreenshotsURL = (game_id) => `${process.env.REACT_APP_API_URL}games/${game_id}/screenshots?key=${process.env.REACT_APP_API_KEY}`;

export const searchGamesURL = (game_name) => `${process.env.REACT_APP_API_URL}games?search=${game_name}&page_size=6&key=${process.env.REACT_APP_API_KEY}`;



