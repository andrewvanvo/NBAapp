import React from 'react';

// components
import Game from './Game';

function GamesList({ games }) {
    return (
        <ul>
            <li>{games.map((game, i) => <Game game={game}
                key={i} />)}</li>
        </ul>
    )
}

export default GamesList;