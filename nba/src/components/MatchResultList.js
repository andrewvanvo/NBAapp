import React from 'react';
import PlayerMatchResult from './PlayerMatchResult';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function MatchResultList ({results}){
    
    return(
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Player</TableCell>
                      <TableCell align="right">Team</TableCell>
                      <TableCell align="right">Points</TableCell>
                      <TableCell align="right">Assists</TableCell>
                      <TableCell align="right">Total Rebounds</TableCell>
                      <TableCell align="right">Steals</TableCell>
                      <TableCell align="right">Turnovers</TableCell>
                      <TableCell align="right">Blocks</TableCell>
                      <TableCell align="right">Minutes Played</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {results.map((result, i) =>
                        <TableRow>
                            <PlayerMatchResult result={result} key={i}/>
                        </TableRow>
                    )}
                  </TableBody>
                </Table>
            </TableContainer>
            
        </>
    )
}
