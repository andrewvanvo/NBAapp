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
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';

//Date Picker Modules
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'

//MUI
import {ThemeProvider, createTheme} from '@material-ui/core/styles'



//CSS 
import './App.css';

function App() {

  const theme = createTheme({
    palette:{
      type: 'dark'
    }
  })


  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        
          <BrowserRouter>
            <Routes>


              <Route path="/" element={<HomePage />} />
              <Route path="gamespage" element={<GamesPage />} />
              <Route path='quiz' element={<QuizPage />} />
              <Route path='results' element={<ResultsPage />} />



            </Routes>
          </BrowserRouter>
        
      </MuiPickersUtilsProvider>
      </div>
    </ThemeProvider>
    

  )
}

export default App;
