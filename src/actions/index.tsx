import types from './types'

let nextGameId = 0
export const newGame = date => ({
    type: types.NEW_GAME, 
    date: date, 
    id: nextGameId++
})

let nextPlayerId = 0
export const newPlayer = name => ({
    type: types.NEW_PLAYER,
    name: name,
    id: nextPlayerId++
})

export const assignPlayer = (player, team) => ({
    type: types.ASSIGN_PLAYER,
    player: player,
    team: team
})

let nextPAId = 0
export const newPlateAppearance = (batterId, pitcherId, outs = 0, runner1Id = null, runner2Id = null, runner3Id = null) => ({
    batterId: batterId,
    id: nextPAId,
    pitcher: pitcherId,
    outs: 0,
    runner1Id: runner1Id,
    runner2Id: runner2Id,
    runner3Id: runner3Id
})  

// let nextPlateAppearanceId
// export const addPlateAppearance = batter_name => ({
//     batter: batter
// })