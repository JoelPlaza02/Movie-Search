import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MovieTrailer from './components/MovieTrailer/MovieTrailer';
import TvShowPage from './components/TvShowPage/TvShowPage';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import './App.css';
import { AuthContextProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
 
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
            <Route exact path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/HomePage" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
            <Route path="/StreamingOnTv" element={<TvShowPage />} />
            <Route path="/TrailerSearch" element={<MovieTrailer />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;