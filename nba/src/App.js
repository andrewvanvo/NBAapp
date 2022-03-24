//General Modules
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';

//Date Picker Modules
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'

//CSS 
import './App.css';


function App() {
  return(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className = 'App'>
        <BrowserRouter>
          <Routes>

              <Route path="/" element={<HomePage />} />



            

            </Routes>
        </BrowserRouter>,
      </div>
    </MuiPickersUtilsProvider>
    
  )
}

export default App;
