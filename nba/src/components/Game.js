import React, { useState } from 'react';

// Axios 
import axios from "axios";

function Game({ game }) {
    return (
        <ul>
            <li>game.teams.home.nickname</li>
            <li>game.teams.away.nickname</li>
        </ul>
    )
}

export default Game;