import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import RecoverPage from './pages/RecoverPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import CalendarPage from './pages/CalendarPage';
import ToDoPage from './pages/ToDoPage';
import Layout from './pages/Layout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState('');

  const handleLogin = (id) => {
    setIsLoggedIn(true);
    console.log(id);
    setId(id);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/recover-password" element={<RecoverPage />} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route element={<Layout id={id}/>}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/todo" element={<ToDoPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
