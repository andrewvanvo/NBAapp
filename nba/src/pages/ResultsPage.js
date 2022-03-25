import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import MatchResultList from '../components/MatchResultList';

//MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'

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
    console.log(gameID)
    console.log(score)


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
            <p>ResultsPageTest</p>
            <MatchResultList results={results}/>
            
        </>
    )
}



export default ResultsPage;