import React, { useState } from 'react';

import { KeyboardDatePicker } from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'
import Button from '@mui/material/Button';

// .getMonth() is 0 based. Offset by +1 later for API call
function HomePage() {

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      <br></br>

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

          />
        </Grid>
      </Grid>

      <Button variant='contained' href='/gamespage' >Submit</Button>


      {console.log(selectedDate)}
      {console.log(selectedDate.getDate())}
      {console.log(selectedDate.getMonth())}
      {console.log(selectedDate.getFullYear())}

    </>
  )
};

export default HomePage;