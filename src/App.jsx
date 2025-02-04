import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';
import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;