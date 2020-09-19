import { connect } from 'react-redux'
import { assignPlayer } from '../actions'
import TeamLineups from '../components/TeamLineups'

const mapState = state => ({
    players: state['livegame']['players'] ? { ...state['livegame']['players'] } : {},
    home_lineup: { ...state['livegame']['home_lineup']},
    away_lineup: { ...state['livegame']['away_lineup']}
})

const mapDispatch = dispatch => ({
    toHomeClick: player => {
        console.log('to home')
        dispatch(assignPlayer(player, 'home'))
    },
    toUnassignedClick: player => {
        console.log('to unassigned')
        dispatch(assignPlayer(player, 'unassigned'))

    },
    toAwayClick: player => {
        dispatch(assignPlayer(player, 'away'))
        console.log('to away')
    }
})

export default connect(mapState, mapDispatch)(TeamLineups)
