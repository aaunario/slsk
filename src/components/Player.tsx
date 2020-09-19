import React, { useState } from 'react'
import {Checkbox, InputLabel, ListItem, ListItemIcon, ListItemText, MenuItem, Select} from '@material-ui/core'

const Player = ({player, onCheckClick, checked}) => {

    const [defPos, setDefPos] = useState('')
    const onPositionPick = (event: React.ChangeEvent<{ value: unknown }>) => {
        setDefPos(event.target.value as string)
    }
    return (
        <ListItem key={player['id']} dense button onClick={onCheckClick(player)}>
            <ListItemIcon>
                <Checkbox checked={checked}></Checkbox>
                <ListItemText primary={player['name']}/>
                <Select
                    id='position-select'
                    value={defPos}
                    onChange={onPositionPick}
                >
                    <MenuItem value={1}>P</MenuItem>
                    <MenuItem value={2}>C</MenuItem>
                    <MenuItem value={3}>1B</MenuItem>
                    <MenuItem value={4}>2B</MenuItem>
                    <MenuItem value={5}>3B</MenuItem>
                    <MenuItem value={6}>SS</MenuItem>
                    <MenuItem value={7}>LF</MenuItem>
                    <MenuItem value={8}>CF</MenuItem>
                    <MenuItem value={9}>RF</MenuItem>    
                </Select>
            </ListItemIcon>
        </ListItem>
    )
} 

export default Player