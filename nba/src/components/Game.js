import React, { useState } from 'react';

// Axios 
import axios from "axios";

function Game({ game }) {
    return (
        <ul>
            <li>{game.teams.home.name}</li>
            <li>{game.teams.visitors.name}</li>
        </ul>
    )
}

export default Game;