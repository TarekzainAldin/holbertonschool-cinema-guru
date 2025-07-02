// src/routes/auth/Authentication.jsx
import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';
import axios from 'axios';

export default function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true); // true = Login, false = Register
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = _switch
      ? 'http://localhost:8000/api/auth/login'
      : 'http://localhost:8000/api/auth/register';

    try {
      const res = await axios.post(endpoint, { username, password });
      localStorage.setItem('accessToken', res.data.accessToken);
      setUserUsername(username);
      setIsLoggedIn(true);
    } catch (error) {
      alert(
        error.response?.data?.message ||
        (_switch ? 'Login failed' : 'Register failed')
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-switch">
          <button
            className={_switch ? 'active' : ''}
            onClick={() => setSwitch(true)}
          >
            Sign In
          </button>
          <button
            className={!_switch ? 'active' : ''}
            onClick={() => setSwitch(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {_switch ? (
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          ) : (
            <Register
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          )}
          <button type="submit" className="submit-btn">
            {_switch ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}
