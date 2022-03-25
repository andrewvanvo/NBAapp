import React from 'react'
import { useHistory, useLocation } from "react-router-dom";

function QuizPage(){

    //Pulling state variable/Date picked from GamesPage
    const location = useLocation()
    const  gameProp  = location.state

    console.log(gameProp)

    return(
        <>
            <p>Quiz Page</p>
        </>
    )
}

export default QuizPage