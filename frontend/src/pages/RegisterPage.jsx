import React, { useState } from 'react';
import '../styles/Register.css';
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import Divider from '@mui/material/Divider';


function Register() {

    let wrapperSize = {
        width: '400px',
        height: '720px',
        padding: '10px 20px'
      };

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const url = 'http://localhost:3000/api/register';
            const response = await axios.post(url, {name, email, username, password, passwordConfirm});
            navigate(-1);
        } catch (error) {
            console.error('Error registering:', error);
            setError('An error occurred while registering');
        }
    };

    return (
        <div className="container2">
            <div className="wrapper" style={wrapperSize}>
                <h1 style={{fontSize: '18px'}}>Sign up today to manage your workflow and productivity.</h1>
                <button onClick={() => navigate(-1)}>Back</button>
                <Divider className="divider">Or</Divider>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input
                            type="name"
                            id="name"
                            placeholder="Full Name" required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email Address" required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="username"
                            id="username"
                            placeholder="Username" required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            id="passweord"
                            placeholder="Password" required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            id="passwordConfirm"
                            placeholder="Confirm Password" required
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                    </div>
                    <button type="submit" style={{ backgroundColor: 'rgb(0, 98, 255)',borderColor: 'rgb(0, 98, 255)' }}>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
