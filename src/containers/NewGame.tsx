import React from 'react'
import { connect } from 'react-redux'
import { newGame } from '../actions'
import {Button} from '@material-ui/core'

const NewGame = ({ dispatch }) => {
    
    return (
        <div>
            <Button onClick={() => dispatch(newGame((new Date().toString()) ))}>Start New Game</Button>
        </div>
    )
}

export default connect()(NewGame)