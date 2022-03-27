import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//MUI
import { KeyboardDatePicker } from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core';
import { Box, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';

function HomePage() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = new Date()

  return (
  
      <Box height= '100vh'>
        <Grid container direction='row' justifyContent='space-evenly' alignItems='center'>
          <Grid item xs={12} md={3}>
            <Paper>
              <Card>
                <CardContent>
                  <Typography>Ipsum Lorem</Typography>  
                </CardContent>
                </Card>
            </Paper>
            
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper>
              <Card>
                <CardContent>
                  <KeyboardDatePicker value={selectedDate} onChange={setSelectedDate}
                    InputAdornmentProps={{ position: 'end' }}
                    label='Select Date'
                    inputVariant='outlined'
                    format='dd/MM/yyyy'
                    variant='static'
                    autoOk='true'
                    orientation='landscape'
                    disableFuture ='true'
                    maxDate = {today.setDate(today.getDate() - 1)}
                  />
                  </CardContent>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper>
              <Card>
                <CardContent>
                  <Link to='/gamespage' state={{ dateProp: selectedDate }} >Submit</Link>
                </CardContent>
              </Card>
            </Paper>
          </Grid>

        </Grid>
      </Box>
      
  )
}

export default HomePage;