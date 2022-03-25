
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";

// Components 
import GamesList from '../components/GamesList';
import QuestionsList from '../components/QuestionsList';

function QuizPage() {

    //parsing URL param, gameID variable will be a string
    const params = new URLSearchParams(window.location.search)
    const gameID = params.get('gameID')

    // let temp_game_id = 8133;

    // const [game, setGame] = useState([]);
    // // const history = useHistory();
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
    //         'X-RapidAPI-Key': '3d14fa2b63msh2bae5fd2125e0e3p16385fjsn756ac5ed2242'
    //     }
    // };

    // const loadGame = async () => {

    //     const response = await fetch(`https://api-nba-v1.p.rapidapi.com/players/statistics?game=${temp_game_id}`, options)
    //     const data = await response.json();
    //     console.log(data.response);
    //     setGame(data.response);
    //     // .then(response => response.json())
    //     // .then(response => console.log(response))
    //     // .catch(err => console.error(err));
    // }

    // useEffect(() => {
    //     loadGame();
    // }, []);




    return (
        <div>
            <h1>List of Questions</h1>
            <h2>{gameID}</h2>
            <QuestionsList></QuestionsList>
        </div>
    )

}

export default QuizPage;
