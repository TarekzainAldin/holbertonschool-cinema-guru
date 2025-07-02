import React, { useState, useEffect } from 'react';
import Authentication from './routes/auth/Authentication'; // Your login/register component
import Dashboard from './routes/dashboard/Dashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");
  const [lastAction, setLastAction] = useState(""); // "login" or "register"

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;

    fetch('http://localhost:8000/api/auth/verify', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error('Unauthorized');
        return res.json();
      })
      .then(data => {
        setIsLoggedIn(true);
        setUserUsername(data.username);
      })
      .catch(() => {
        setIsLoggedIn(false);
        setUserUsername("");
        localStorage.removeItem('accessToken');
      });
  }, []);

  const welcomeMessage =
    lastAction === "register"
      ? `Hello ${userUsername} ✅ Registered successfully`
      : `Hello ${userUsername} ✅ Logged in successfully`;

  return (
    <>
      {isLoggedIn ? (
        <>
          <h2 style={{ padding: 20 }}>{welcomeMessage}</h2>
          <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        </>
      ) : (
        <Authentication
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
          setLastAction={setLastAction}
        />
      )}
    </>
  );
}
