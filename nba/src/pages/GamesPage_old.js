import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
//changed format of module export. Wasn't playing well with the BrowserRouter for some reason
// Axios 
// import axios from "axios";
// Components 
import GamesList from '../components/GamesList';
// Pages


const axios = require('axios');




//changed format of module export. Wasn't playing well with the BrowserRouter for some reason


//function GamesPage ({ gameDate }){
function GamesPage() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames();
    })
    useEffect(() => {
        console.log(games)
    })

    //Pulling state variable/Date picked from Homepage


    // const location = useLocation()
    // const { dateProp } = location.state

    // //date variables to use for api
    // const day = dateProp.getDate()
    // const month = dateProp.getMonth() + 1
    // const year = dateProp.getFullYear()


    // TEMP, need api call here
    //const [time, setTime] = useState(gameDate.time);
    // TEMP, need api call here

    // const history = useHistory();

    // TEMP DATE
    let temp_date = "2022-02-12";
    // TEMP DATE

    const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/games',
        params: { date: temp_date },
        headers: {
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '3d14fa2b63msh2bae5fd2125e0e3p16385fjsn756ac5ed2242'
        }
    };
    const fetchGames = async () => {
        const response = axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        }).then(setGames(response.data));

    }
    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });


    return (
        <>
            <p>List of games</p>
            <p>{games}</p>
            {/* <GamesList games={games}></GamesList> */}
            {/* <p>GamesPage test</p>
            <p>Date:{day}</p>
            <p>Month:{month}</p>
            <p>Year:{year}</p> */}

        </>
    )
};

export default GamesPage;