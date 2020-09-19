import types from '../actions/types';


const games = (state = [], action) => {
    let newState
    switch (action.type) {
        case types.NEW_GAME:
            const newGame = { id: action.id, date: action.date }
            newState = [ ...state, newGame ]
        break;
        default:
            newState = state
    }
    return newState
}

export default games