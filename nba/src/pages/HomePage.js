import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//MUI
import { KeyboardDatePicker } from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';

// .getMonth() is 0 based. Offset by +1 later for API call

function HomePage() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = new Date()

  return (
    <>
      <br></br>
      <p>Font Test</p>
      <Typography variant ='h6'>Font Test</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
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

          <Link to='/gamespage' state={{ dateProp: selectedDate }} >Submit</Link>
          
        </Grid>
      </Grid>


    </>
  )
}

export default HomePage;