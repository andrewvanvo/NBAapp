import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";

// Components 
import GamesList from '../components/GamesList';

//MUI
import { Box } from '@material-ui/core';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'

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

    if (day >= 10){
        dayStr = day.toString()
       
    } else {
        dayStr = day.toString()
        dayStr = '0'+ dayStr
    }

    if (month >= 10){
        monthStr = month.toString()
        
    } else{
        monthStr = month.toString()
        monthStr = '0'+ monthStr
    }

    const loadGames = async () => {

        const response = await fetch(`https://api-nba-v1.p.rapidapi.com/games?date=${yearStr}-${monthStr}-${dayStr}`, options)
        const data = await response.json();
        setGames(data.response);
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));
    }

    useEffect(() => {
        loadGames();
    }, []);

    return (
        <>
        <Box sx={{ width: '100%', maxWidth: 1500, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <GamesList games={games}/>
                </List>
            </nav>
        </Box>
        </>
    )
};

export default GamesPage;
