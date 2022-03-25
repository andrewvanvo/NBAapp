import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";

// Components 
import GamesList from '../components/GamesList';

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
        console.log(data.response);
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
            <p>List of games</p>
            <GamesList games={games}></GamesList>
            {/* <p>GamesPage test</p>
        <p>Date:{day}</p>
        <p>Month:{month}</p>
        <p>Year:{year}</p> */}

        </>
    )
};

export default GamesPage;
