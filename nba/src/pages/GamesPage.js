import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";

//changed format of module export. Wasn't playing well with the BrowserRouter for some reason


//function GamesPage ({ gameDate }){
function GamesPage(){

    //Pulling state variable/Date picked from Homepage
    const location = useLocation()
    const {dateProp} = location.state
    const day = dateProp.getDate()
    const month = dateProp.getMonth() + 1
    const year = dateProp.getFullYear()
    

    // TEMP, need api call here
    //const [time, setTime] = useState(gameDate.time);
    // TEMP, need api call here

    //const history = useHistory();


    return (
        <>
            <p>GamesPage test</p>

            {console.log(day,month,year)}
        </>
    )
};

export default GamesPage