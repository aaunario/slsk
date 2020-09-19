import types from '../actions/types';

const players = (state = [], action) => {
    let newState 
    switch (action.type) {
        case types.NEW_PLAYER:
            let newPlayer = { 'name': action.name, 'id': action.id }
            newState = [ ...state,  newPlayer ]
        break;
        default:
            newState = state;
    }
    return newState
}

export default players

