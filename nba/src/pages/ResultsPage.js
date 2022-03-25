import React, {useState, useEffect} from 'react'
import MatchResultList from '../components/MatchResultList';



function ResultsPage(){

    const [results, setResults] = useState([])
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
          'X-RapidAPI-Key': 'c8e4662a64msh6ac6252509bd635p188868jsnf61afa9ea2cc'
        }
      };

    const loadResults = async () => {
        const response = await fetch('https://api-nba-v1.p.rapidapi.com/players/statistics?game=8133', options)
        const data = await response.json();
        console.log(data.response);
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