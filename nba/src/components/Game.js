import React, { useState } from 'react';
import { Link } from 'react-router-dom'

// Axios 
import axios from "axios";

//MUI
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'
import Grid from '@mui/material/Grid'
import { Avatar, Button, ListItemButton } from '@mui/material';
import { ListItemIcon } from '@material-ui/core';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';



function Game({ game }) {

    return (
    
            <ListItem button component='a' href={`/quiz?gameID=${game.id}`}>
                <Grid item md={2} alignItems='center'>
                    <Avatar src={game.teams.home.logo} />
                </Grid>
                <Grid item md={12} justify-content='center' alignItems='center'>
                    <ListItemText>
                        {game.teams.home.name}  VS  {game.teams.visitors.name}
                    </ListItemText>
                </Grid>
                <Grid item md={2} alignItems='center' justify-content='center'>
                    <Avatar src={game.teams.visitors.logo} />
                </Grid>
            </ListItem>




    )
}

export default Game;