import { Button, FormControl, Grid } from '@material-ui/core'
import React, {useState} from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import PlayerList from './PlayerList'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

//   const classes = useStyles();

const TeamLineups = ({ players, home_lineup, away_lineup, toHomeClick, toUnassignedClick, toAwayClick }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let selected:Object[] = []
    const [checked, setChecked] = useState<Object[]>([])
    const handleToggle = (player: Object) => () => {
        const newChecked: Object[] = [ ...checked ]
        const index = checked.indexOf(player['id'])
        if (index === -1) {
            let pid = player['id']            
            newChecked.push(pid)
        } else {
            newChecked.splice(index, 1)
        }
        setChecked(newChecked)
    }    

    return (
       <div>
           <FormControl >

            <Grid container spacing={1} justify="center" alignItems="baseline" >

                <div>
                    <label>HOME</label>
                    <Grid item>{ PlayerList({ players: home_lineup, onPlayerClick: handleToggle, selectedIds: checked })}</Grid>
                </div>
                
                <Button onClick={ () => checked.filter((pid => home_lineup.hasOwnProperty(pid.toString()))).forEach(pid => toUnassignedClick(home_lineup[pid.toString()])) }>
                    &gt;
                </Button>
                <Button onClick={ () => checked.filter(pid => players.hasOwnProperty(pid.toString())).forEach(pid => toHomeClick(players[pid.toString()])) }>
                &lt;
                </Button>
                <div>
                    <label>UNASSIGNED</label>
                    <Grid item>{ PlayerList({ players: players, onPlayerClick: handleToggle, selectedIds: checked })}</Grid>
                </div>
                <Button onClick={ () => checked.filter(pid => players.hasOwnProperty(pid.toString())).forEach(pid => toAwayClick(players[pid.toString()])) }>
                    &gt;
                </Button>
                <Button onClick={ () => checked.filter(pid => away_lineup.hasOwnProperty(pid.toString())).forEach(pid => toUnassignedClick(away_lineup[pid.toString()])) }>
                    &lt;
                </Button>
                <div>
                    <span>AWAY</span>
                    <Grid item>{ PlayerList({ players: away_lineup, onPlayerClick: handleToggle, selectedIds: checked})}</Grid>
                </div>
            </Grid>
           </FormControl>
         </div>
    )
}

export default TeamLineups