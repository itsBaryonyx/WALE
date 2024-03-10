// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/outside/LandingPage';
import SignUpPage from './pages/outside/SignUpPage';
import LogInPage from './pages/outside/LogInPage';
import AboutOutsidePage from './pages/outside/AboutOutsidePage';
import ContactOutsidePage from './pages/outside/ContactOutPage';
import HomePage from './pages/inside/HomePage';
import Profile from './pages/inside/profile';
import Calculator from './pages/inside/calculator';
import AdminHomePage from './Admin/03. Pages/Adminhome';
import Lessons from './pages/inside/lessons';
import AdminLessons from './Admin/03. Pages/Adminlessons';
import AdminStudents from './Admin/03. Pages/Adminstudents';
import TimeCalculator from './pages/inside/Converter UI/timecalculator';
import DistanceSpeedTimeCalculator from './pages/inside/Converter UI/distancespeedtimecalculator';
import Pericumference from './pages/inside/Converter UI/pericumference';
import Area from './pages/inside/Converter UI/area';
import Volume from './pages/inside/Converter UI/volume';
import Temperature from './pages/inside/Converter UI/temperature';
import Surfacearea from './pages/inside/Converter UI/surfacearea';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/adminhomepage" element={<AdminHomePage />} />
        <Route path="/adminlessons" element={<AdminLessons />} />
        <Route path="/adminlist" element={<AdminStudents />} />
        <Route path="/aboutout" element={<AboutOutsidePage />} />
        <Route path="/contactout" element={<ContactOutsidePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/calculator" element={<Calculator/>} />
        <Route path="/lessons" element={<Lessons/>} />
        <Route path="/timeconversion" element={<TimeCalculator/>} />
        <Route path="/speedtimedistance" element={<DistanceSpeedTimeCalculator/>} />
        <Route path="/perimetercircumference" element={<Pericumference/>} />
        <Route path="/area" element={<Area/>} />
        <Route path="/volume" element={<Volume/>} />
        <Route path="/temperature" element={<Temperature/>} />
        <Route path="/surfacearea" element={<Surfacearea/>} />


        
        
      </Routes>
    </Router>
  );
}

export default App;
