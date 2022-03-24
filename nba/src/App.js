//General Modules
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Pages
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import ResultsPage from './pages/ResultsPage';

//Date Picker Modules
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'

//CSS 
import './App.css';


function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className='App'>
        <BrowserRouter>
          <Routes>


            <Route path="/" element={<HomePage />} />
            <Route path="gamespage" element={<GamesPage />} />
            <Route path='results' element={<ResultsPage/>}/>


          </Routes>
        </BrowserRouter>
      </div>
    </MuiPickersUtilsProvider>

  )
}

export default App;
