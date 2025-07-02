import React, { useState, useEffect } from 'react';
import Authentication from './routes/auth/Authentication';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");
  const [lastAction, setLastAction] = useState(""); // "login" or "register"

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;

    // تأكد من تحديث الرابط حسب سيرفرك
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
      ? `مرحبًا، ${userUsername} ✅ تم التسجيل بنجاح`
      : `مرحبًا، ${userUsername} ✅ تم تسجيل الدخول`;

  return (
    <>
      {isLoggedIn ? (
        <div style={{ padding: 20 }}>
          <h2>{welcomeMessage}</h2>
          <button onClick={() => {
            localStorage.removeItem('accessToken');
            setIsLoggedIn(false);
            setUserUsername("");
          }}>تسجيل الخروج</button>
        </div>
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
