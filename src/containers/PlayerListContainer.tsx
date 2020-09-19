import PlayerList from "../components/PlayerList"
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    players: state.players 
})

export default connect(mapStateToProps)(PlayerList)
