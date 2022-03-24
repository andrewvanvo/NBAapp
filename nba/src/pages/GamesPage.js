import React, { useState } from 'react';
<<<<<<< HEAD
import { useHistory } from "react-router-dom";
// Axios 
import axios from "axios";
// Components 

// Pages



=======
import { useHistory, useLocation } from "react-router-dom";
>>>>>>> main

//changed format of module export. Wasn't playing well with the BrowserRouter for some reason


//function GamesPage ({ gameDate }){
<<<<<<< HEAD
function GamesPage() {
=======
function GamesPage(){

    //Pulling state variable/Date picked from Homepage
    const location = useLocation()
    const {dateProp} = location.state
    
    //date variables to use for api
    const day = dateProp.getDate()
    const month = dateProp.getMonth() + 1
    const year = dateProp.getFullYear()
    

>>>>>>> main
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
<<<<<<< HEAD
            <p>List of games</p>

=======
            <p>GamesPage test</p>
            <p>Date:{day}</p>
            <p>Month:{month}</p>
            <p>Year:{year}</p>
            
>>>>>>> main
        </>
    )
};

export default GamesPage;