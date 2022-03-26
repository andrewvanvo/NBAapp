import React from 'react'



function TriviaResults(props){

    let {score} = props
    console.log(score)
    return(
        <>
            <p>score: {score}</p>
        </>
    )
}



export default TriviaResults