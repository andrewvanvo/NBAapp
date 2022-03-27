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
import { Typography } from '@material-ui/core';

function TriviaResults(props){

    let {score} = props
    return(
        <Typography>
            YOUR FINAL SCORE: {score}
        </Typography>
            
        
    )
}



export default TriviaResults