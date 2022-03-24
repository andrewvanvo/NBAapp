import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// Axios 
import axios from "axios";
// Components 

// Pages




//changed format of module export. Wasn't playing well with the BrowserRouter for some reason


//function GamesPage ({ gameDate }){
function GamesPage() {
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

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });


    return (
        <>
            <p>List of games</p>

        </>
    )
};

export default GamesPage;