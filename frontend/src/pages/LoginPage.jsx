// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { FaUser, FaLock, FaBriefcase, FaCalendarAlt, FaClipboardList } from "react-icons/fa";

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = 'http://localhost:3000/api/login';
      const response = await axios.post(url, {username, password});
      if (response.data.success) {
        // Login successful
        onLogin();
      } else {
        // Not today sir
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred while logging in');
    }
  };

  return (
    <div className="container">
      <div class="wrapper">
        <h1>Welcome Back 👋</h1>
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div class="input-box">
            <input
              type="username"
              id="username"
              placeholder="Username" required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="icon-container"> <FaUser/> </div>
          </div>
          <div class="input-box">
            <input
              type="password"
              id="password"
              placeholder="Password" required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="icon-container"> <FaLock/> </div>
          </div>
          <div className="recover-register"> 
            <a href="/recover" class="link1">Forgot Password?</a>
            <a href="/register" class="link1">Register</a>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="links-container">
        <a href="https://github.com/robbiewilcox76" class="link2">GitHub</a>
        <a href="https://www.linkedin.com/in/frwiii/" class="link2">LinkedIn</a>
      </div>
    </div>
  );
}

export default Login;
