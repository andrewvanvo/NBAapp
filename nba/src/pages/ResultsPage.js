import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';

//Components
import MatchResultList from '../components/MatchResultList';
import TriviaResults from '../components/TriviaResults';

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



function ResultsPage(){

    const [results, setResults] = useState([])
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
          'X-RapidAPI-Key': 'c8e4662a64msh6ac6252509bd635p188868jsnf61afa9ea2cc'
        }
      };

    let location = useLocation()
    let gameID = location.state.gameID
    let score = location.state.score
    
    const loadResults = async () => {
        const response = await fetch(`https://api-nba-v1.p.rapidapi.com/players/statistics?game=${gameID}`, options)
        const data = await response.json();
        setResults(data.response);
        
        
    }

    useEffect(() => {
        loadResults();
        
    }, []);


    return(
        <>
            <Box height='100vh'>
                <Grid container direction = 'column'>
                    <Grid item aligntItems='center'>
                        <Paper>
                            <Card>
                                <CardContent>
                                    <TriviaResults score={score}/>
                                </CardContent>
                            </Card>
                        </Paper>
                    </Grid>

                    <Grid item alignItems ='center'>
                        <MatchResultList results={results}/>         
                    </Grid>
                </Grid>
            </Box>
            
        </>
    )
}


export default ResultsPage;