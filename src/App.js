// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/outside/LandingPage';
import SignUpPage from './pages/outside/SignUpPage';
import LogInPage from './pages/outside/LogInPage';
import AboutOutsidePage from './pages/outside/AboutOutsidePage';
import ContactOutsidePage from './pages/outside/ContactOutPage';
import HomePage from './pages/inside/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/aboutout" element={<AboutOutsidePage />} />
        <Route path="/contactout" element={<ContactOutsidePage />} />
        <Route path="/homepage" element={<HomePage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
