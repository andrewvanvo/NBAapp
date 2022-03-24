import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PlayerMatchResult from './PlayerMatchResult';


function MatchResultList (){
    
    const [results, setResults] = useState([])

    useEffect(() =>{
        var options = {
            method: 'GET',
            url: 'https://api-nba-v1.p.rapidapi.com/players/statistics',
            params: {game: '8133'},
            headers: {
              'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
              'X-RapidAPI-Key': 'c8e4662a64msh6ac6252509bd635p188868jsnf61afa9ea2cc'
            }
          };
          
        axios.request(options)
        .then(function (response) {
            console.log(response.data.response)
            const results = response.data.response
            setResults(results)
        })
        .catch(function (error) {
            console.error(error)
        
        });
    })

    return(
        <>
            <p>match result comp</p>
            <PlayerMatchResult/>
            <p>{console.log(results)}</p>
        </>
    )
}


export default MatchResultList