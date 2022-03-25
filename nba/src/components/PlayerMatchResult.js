import React, {useState} from 'react'

import TableCell from '@mui/material/TableCell';



function PlayerMatchResult({result}){

    return(
        <>  
            <TableCell component="th" scope="row">
            {result.player.firstname} {result.player.lastname}
            </TableCell>
            <TableCell align="right">{result.team.name}</TableCell>
            <TableCell align="right">{result.points ?? 0}</TableCell>
            <TableCell align="right">{result.assists ?? 0}</TableCell>
            <TableCell align="right">{result.totreb ?? 0}</TableCell>
            <TableCell align="right">{result.steals ?? 0}</TableCell>
            <TableCell align="right">{result.turnovers ?? 0}</TableCell>
            <TableCell align="right">{result.blocks ?? 0}</TableCell>
            <TableCell align="right">{result.min ?? 0}</TableCell>
                        
        </>
    )

}
    

export default PlayerMatchResult