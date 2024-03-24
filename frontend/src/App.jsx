import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import RecoverPage from './pages/RecoverPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />}
          />
          {/* Additional routes for logged-in users */}
          <Route
            path="/recover-password"
            element={
              <RecoverPage />
            }
          />
          <Route
            path="/register"
            element={
              <RegisterPage />
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardPage />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

