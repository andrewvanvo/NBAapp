import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";

// Components 
import GamesList from '../components/GamesList';

//MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'
import Paper from '@material-ui/core/Paper'

function GamesPage() {

    const [games, setGames] = useState([]);
    // const history = useHistory();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '3d14fa2b63msh2bae5fd2125e0e3p16385fjsn756ac5ed2242'
        }
    };

    //Pulling state variable/Date picked from Homepage
    const location = useLocation()
    const { dateProp } = location.state
    //date variables to use for api
    let day = dateProp.getDate()
    let month = dateProp.getMonth() + 1
    let year = dateProp.getFullYear()

    //converting date variables for dynamic passing into API
    let dayStr
    let monthStr
    let yearStr = year.toString()

    if (day >= 10) {
        dayStr = day.toString()

    } else {
        dayStr = day.toString()
        dayStr = '0' + dayStr
    }

    if (month >= 10) {
        monthStr = month.toString()

    } else {
        monthStr = month.toString()
        monthStr = '0' + monthStr
    }

    const loadGames = async () => {

        const response = await fetch(`https://api-nba-v1.p.rapidapi.com/games?date=${yearStr}-${monthStr}-${dayStr}`, options)
        const data = await response.json();
        setGames(data.response);
        
    }

    useEffect(() => {
        loadGames();
    }, []);

    return (
        <Box height='100vh'>
            <Paper>
            <Grid container spacing={2} justifyContent='center' alignItems='center'>
                <Grid item xs={4} aligntItems='center'>
                    <Card>
                        <List>
                            <GamesList games={games} />
                        </List>
                    </Card>
                </Grid>
            </Grid>
            </Paper>
        </Box>
        
    )
};

export default GamesPage;
