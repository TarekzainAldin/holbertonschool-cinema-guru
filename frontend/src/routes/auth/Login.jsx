// src/routes/auth/Login.jsx
import React from 'react';
import './auth.css';
import { FaUser, FaLock } from 'react-icons/fa';

export default function Login({ username, password, setUsername, setPassword }) {
  return (
    <>
      <h2>Sign in with your account</h2>
      <div className="auth-input">
        <FaUser className="icon" />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="auth-input">
        <FaLock className="icon" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
    </>
  );
}
