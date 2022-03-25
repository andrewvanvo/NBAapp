import React from 'react';
import PlayerMatchResult from './PlayerMatchResult';


function MatchResultList ({results}){
    
    
    return(
        <>
        
            <div>
            {results.map((result, i) => <PlayerMatchResult result={result} key={i}/>)}
            </div>
            

            
        </>
    )
}


export default MatchResultList