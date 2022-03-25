import React from 'react';

// components
import Game from './Game';

//MUI
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import { ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';

function GamesList({ games }) {


    return (
        <>
            {games.map((game, i) =><Game game={game}key={i} />)}  

        </>
        
    )
}

export default GamesList;