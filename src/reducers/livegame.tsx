import types from '../actions/types'

const livegame = (state = {}, action) => {
    let player
    switch (action.type) {
        case types.NEW_GAME:
            return  ({   
                        ...state, 
                        game_id: action.id,
                        home_lineup: {},
                        away_lineup: {},
                        players: {},
                        outs: 0,
                        strikes: 0,
                        balls: 0,
                        half_inning:1,
                        away_score: 0,
                        home_score: 0, 
                    })
        case types.NEW_PLAYER:
            player = { name: action["name"], id: action["id"], team: 'unassigned' }
            let players = {...state['players'], [action['id']]: player }
            const newState = { ...state, players: players }
            return newState
        case types.ASSIGN_PLAYER:
            console.log('assigning player...')
            players = {...state['players']}
            let home = {...state['home_lineup']}
            let away = {...state['away_lineup']}
            let team = action['team']
            let newTeam = team === 'home' ? home : team === 'away' ? away : players
            player = action['player']
            let id = player['id']
            let oldTeam = (players.hasOwnProperty(id.toString())) ? players : home.hasOwnProperty(id.toString()) ? home : away
            delete oldTeam[id]
            newTeam[id.toString()] = player
            return { ...state, players: players, home_lineup: home, away_lineup: away }
        default:
            return state
    }
}

export default livegame