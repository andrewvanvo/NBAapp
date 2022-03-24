import React, {useState} from 'react';
import {Link} from 'react-router-dom'

import {KeyboardDatePicker} from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'

// .getMonth() is 0 based. Offset by +1 later for API call
function HomePage(){

  const [selectedDate, setSelectedDate] = useState(new Date());
  
  //let PropLink = selectedDate => <Link to='gamespage' {...selectedDate} />

  

  return (
    <>
      <br></br>

      <Grid container spacing={2}>
        <Grid item xs={4}>
            <KeyboardDatePicker value ={selectedDate} onChange ={setSelectedDate}
                InputAdornmentProps={{position:'end'}}
                label='Select Date'
                inputVariant='outlined'
                format='dd/MM/yyyy'
                variant='static'
                autoOk='true'
                orientation='landscape'
            />
            
            <Link to='/gamespage' state={{ dateProp: selectedDate}} >Submit</Link>
         
         </Grid>
      </Grid>
      
     
    </>
  )
}

export default HomePage;

//[selectedDate.getDate(),selectedDate.getMonth(),selectedDate.getFullYear()]