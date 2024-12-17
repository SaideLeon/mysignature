import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage.jsx';
import PrecoIdeal from './components/precoIdeal.jsx';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/calc" element={<PrecoIdeal />} />
            </Routes>
        </Router>
    );
};

export default App;
