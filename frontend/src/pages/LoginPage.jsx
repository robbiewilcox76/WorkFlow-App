import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { FaUser, FaLock, FaNetworkWired, FaCalendarAlt, FaCoffee } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Login({ onLogin }) {

  let navigate = useNavigate();

  let wrapperSize = {
    width: '400px',
    height: '450px',
    padding: '10px 20px'
  };

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
      <div className="left-wrapper">
        <FaNetworkWired/>
        <FaCalendarAlt/>
        <FaCoffee/>
      </div>
      <div className="wrapper" style={wrapperSize}>
        <h1>Welcome Back 👋</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="username"
              id="username"
              placeholder="Username" required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="icon-container"> <FaUser/> </div>
          </div>
          <div className="input-box">
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
            <Link to="/recover-password" className="link1">Forgot Password?</Link>
            <Link to="/register" className="link1">Register</Link>
          </div>
          <button type="submit" style={{ backgroundColor: 'rgb(0, 98, 255)',borderColor: 'rgb(0, 98, 255)' }}>Login</button>
        </form>
      </div>
      <div className="links-container">
        <a href="https://github.com/robbiewilcox76" className="link2">GitHub</a>
        <a href="https://www.linkedin.com/in/frwiii/" className="link2">LinkedIn</a>
      </div>
    </div>
  );
}

export default Login;
