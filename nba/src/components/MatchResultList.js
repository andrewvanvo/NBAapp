import React from 'react';
import PlayerMatchResult from './PlayerMatchResult';


function MatchResultList ({results}){
    
    
    return(
        <>
            <ul>
                {results.map((result, i) => <PlayerMatchResult result={result} key={i}/>)
                }
            </ul>

            
        </>
    )
}


export default MatchResultList