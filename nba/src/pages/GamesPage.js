import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const GamesPage = ({ gameDate }) => {


    // TEMP, need api call here
    const [time, setTime] = useState(gameDate.time);
    // TEMP, need api call here

    const history = useHistory();
};