import React from 'react'
import { List} from '@material-ui/core'
import Player from './Player'
// import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd'

const PlayerList = ({ players, onPlayerClick, selectedIds }) => {
    return (
        <div>
            <List dense component='div' role='list'>
                { 
                    Object.keys(players).map( key => players[key]).map( player => 
                        <Player
                            player={player}
                            onCheckClick = {onPlayerClick}
                            checked={(selectedIds.indexOf(player['id']) !== -1)}
                        />
                    )
                }
            </List>
        </div>
    )
}   


export default PlayerList