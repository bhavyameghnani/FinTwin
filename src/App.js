import React from 'react';
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import Screen from "./Components/Screen/Screen";
import HomePage from "./Components/HomePage/HomePage";
import NewsPage from "./Components/News/NewsPage";
import WatchListPage from "./Components/WatchList/WatchListPage";
import FavWatchList from "./Components/FavWatchList/FavWatchList";
import LiteracyPage from "./Components/Literacy/LiteracyPage";
// import './App.css';
import QuestionCard from './Components/Quiz/QuestionCard';
import { MainApp } from './Components/Quiz/PageElements/MainApp';
import { theme } from './Components/Quiz/data/AppTheme'
import { createGlobalStyle, ThemeProvider } from 'styled-components';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/screen" element={<Screen />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/literacy" element={<LiteracyPage />} />
          {/* <Route path="literacyDetails/:eid" element={<LiteracyDetailsPage />} /> */}
          <Route path="/news" element={<NewsPage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
          <Route path="/favlist" element={<FavWatchList/>} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/quiz" element={ <ThemeProvider theme={theme}>

      <MainApp className="app">
        <QuestionCard />
        <p style={{ fontSize: '.7rem', textAlign: 'center' }}>  {new Date().getFullYear()}</p>
      </MainApp>
    </ThemeProvider>  } />

       
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
