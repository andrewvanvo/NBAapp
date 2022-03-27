import React from 'react'

//MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'
import Paper from '@material-ui/core/Paper'
import { CardContent } from '@material-ui/core';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function PlayerMatchResult({result}){

    return (
        
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
        

};
    
export default PlayerMatchResult