
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";

// Components 
import GamesList from '../components/GamesList';
import QuestionsList from '../components/QuestionsList';
import CircularProgress from '@mui/material/CircularProgress';

//MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'
import Paper from '@material-ui/core/Paper'
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

function QuizPage() {


    //parsing URL param, gameID variable will be a string
    const params = new URLSearchParams(window.location.search)
    const gameID = params.get('gameID')

    // let temp_game_id = 8133;

    const [game, setGame] = useState([]);
    const [isFetched, setFetched] = useState(false)
    //const [usablePlayers, setUsablePlayers] = useState([]);
    // const history = useHistory();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'c8e4662a64msh6ac6252509bd635p188868jsnf61afa9ea2cc'
        }
    };

    const loadGame = async () => {

        const response = await fetch(`https://api-nba-v1.p.rapidapi.com/players/statistics?game=${gameID}`, options)
        const data = await response.json();
        //date.response = array of objects


        setGame(data.response);
        setFetched(true)

        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));
        // Creating list of players that played more than 15 min


        //let tempUsablePlayers = [];
        //for (let person of game) {
        //    let minutes = person.min;
        //    minutes = parseInt(minutes);
        //    if (minutes > 15) {
        //        tempUsablePlayers.push(person);
        //    }
        //}

        //setUsablePlayers(data.response.);
    }


    useEffect(() => {
        loadGame();

    }, []);


    let usablePlayers = []
    for (let player of game) {
        let minutes = player.min
        minutes = parseInt(minutes)
        if (minutes > 15) {
            usablePlayers.push(player)
        }
    }


    // Example response body to limit api calls
    // let example = exampleGame;

    return (


        <Box height='100vh'>
            <Grid container direction='column' justifyContent='center' alignItems='center'>
                <Grid item md={3} style={{width: '50%'}}>
                    <Paper>
                        <Card>
                            <CardContent>
                                {isFetched ? <QuestionsList gameID={gameID} usablePlayers={usablePlayers} /> : <CircularProgress />}
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );

}

export default QuizPage;
//

//
