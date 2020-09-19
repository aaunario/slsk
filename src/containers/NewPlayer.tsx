import { newPlayer } from "../actions";
import React from 'react'
import { connect } from 'react-redux'


const NewPlayer = ({dispatch}) => {
    let input
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(newPlayer(input.value))
                input.value = ''
            }}>
                <label>
                    Name: 
                    <input ref={node => input = node} />
                </label>
                <button type='submit'>
                    Create New Player
                </button>
            </form>
        </div>
    )
}
export default connect()(NewPlayer)