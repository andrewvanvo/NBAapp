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
import { Typography } from '@mui/material';

function PlayerMatchResult({result}){

    return (
        
            <>
                <TableCell component="th" scope="row">
                    <Typography sx={{color: 'white'}}>
                        {result.player.firstname} {result.player.lastname}
                    </Typography>
                </TableCell>
                <TableCell align="right"><Typography sx={{color: 'white'}}>{result.team.name}</Typography></TableCell>
                <TableCell align="right"><Typography sx={{color: 'white'}}>{result.points ?? 0}</Typography></TableCell>
                <TableCell align="right"><Typography sx={{color: 'white'}}>{result.assists ?? 0}</Typography></TableCell>
                <TableCell align="right"><Typography sx={{color: 'white'}}>{result.totreb ?? 0}</Typography></TableCell>
                <TableCell align="right"><Typography sx={{color: 'white'}}>{result.steals ?? 0}</Typography></TableCell>
                <TableCell align="right"><Typography sx={{color: 'white'}}>{result.turnovers ?? 0}</Typography></TableCell>
                <TableCell align="right"><Typography sx={{color: 'white'}}>{result.blocks ?? 0}</Typography></TableCell>
                <TableCell align="right"><Typography sx={{color: 'white'}}>{result.min ?? 0}</Typography></TableCell>
            </>
                
                        
                    
        
    )
        

};
    
export default PlayerMatchResult