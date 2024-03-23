// App.jsx
import React, { useState } from 'react';
import './App.css';
import UsersPage from './pages/UsersPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : <UsersPage />}
    </div>
  );
}

export default App;
