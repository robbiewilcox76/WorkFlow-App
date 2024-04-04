import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import RecoverPage from './pages/RecoverPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import CalendarPage from './pages/CalendarPage';
import ToDoPage from './pages/ToDoPage';
import NotesPage from './pages/NotesPage';
import NavBar from './pages/NavBar';

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
      <NavBar id={id}/>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                // Redirect to DashboardPage with id if logged in
                <Navigate to={`/dashboard/${id}`} replace />
              ) : (
                // Show LoginPage if not logged in
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
          <Route path="/recover-password" element={<RecoverPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard/:id" element={<DashboardPage />} />
          <Route path="/calendar/:id" element={<CalendarPage />} />
          <Route path="/todo/:id" element={<ToDoPage />} />
          <Route path="/notes/:id" element={<NotesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
