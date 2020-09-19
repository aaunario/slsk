import { combineReducers } from 'redux';
import games from './games'
import livegame from './livegame';
import players from './players'

const rootReducer = combineReducers({
    games: games, 
    players: players,
    livegame: livegame
})

export default rootReducer
