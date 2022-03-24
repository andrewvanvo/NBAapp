import React, {useState} from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { 
    DatePicker,
    MuiPickersUtilsProvider, 
} from '@material-ui/pickers';


function HomePage(){

  const [selectedDate, handleDateChange] = useState(new Date());

  return(
    <>
      <h1>Route test</h1>
    </>
  )
}

export default HomePage;