import React, { useState } from 'react';
import {Link} from 'react-router-dom'

// Axios 
import axios from "axios";

//MUI
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import {Button, ListItemButton } from '@mui/material';
import { ListItemIcon } from '@material-ui/core';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';



function Game({ game }) {

    return (
        <>
            
                <ListItem button component='a' href= {`/quiz?gameID=${game.id}`}>
                    <ListItemText>      
                        {game.teams.home.name}  VS  {game.teams.visitors.name}    
                    </ListItemText> 
                </ListItem>
            
                

        </> 
        )
}

export default Game;