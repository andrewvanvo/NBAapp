import React from 'react';

// components
import Game from './Game';

//MUI
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'
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