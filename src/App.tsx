import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from '@/views/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
