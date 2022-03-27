import React from 'react';
import PlayerMatchResult from './PlayerMatchResult';

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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';



export default function MatchResultList ({results}){
    
    return(
              
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell colspan="9" style={{ "text-align": "center" }}>
                          <Typography sx={{color: 'white'}}>MATCH RESULTS</Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><Typography sx={{color: 'white'}}>Player</Typography></TableCell>
                        <TableCell align="right"><Typography sx={{color: 'white'}}>Team</Typography></TableCell>
                        <TableCell align="right"><Typography sx={{color: 'white'}}>Points</Typography></TableCell>
                        <TableCell align="right"><Typography sx={{color: 'white'}}>Assists</Typography></TableCell>
                        <TableCell align="right"><Typography sx={{color: 'white'}}>Total Rebounds</Typography></TableCell>
                        <TableCell align="right"><Typography sx={{color: 'white'}}>Steals</Typography></TableCell>
                        <TableCell align="right"><Typography sx={{color: 'white'}}>Turnovers</Typography></TableCell>
                        <TableCell align="right"><Typography sx={{color: 'white'}}>Blocks</Typography></TableCell>
                        <TableCell align="right"><Typography sx={{color: 'white'}}>Minutes Played</Typography></TableCell>
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
             
    )
}
