// src/components/navigation/SideBar.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 👉 make sure the paths below are correct relative to THIS file
import '../components.css';          // 1‑level up then components.css
import './navigation.css';           // same folder
import Activity from '../Activity';  // 1‑level up

export default function SideBar() {
  const [selected, setSelected] = useState('home');
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  /* --- routing helper --- */
  const setPage = (pageName) => {
    setSelected(pageName);
    switch (pageName.toLowerCase()) {
      case 'home':        navigate('/home');       break;
      case 'favorites':   navigate('/favorites');  break;
      case 'watch later': navigate('/watchlater'); break;
      default:            navigate('/');           break;
    }
  };

  /* --- fetch recent activity once --- */
  useEffect(() => {
    axios.get('/api/activity')
      .then(res => { setActivities(res.data); setShowActivities(true); })
      .catch(err => console.error('Failed to fetch activities', err));
  }, []);

  return (
    <nav className="sidebar">
      <ul className="navigation-list">
        <li className={selected === 'home' ? 'selected' : ''} onClick={() => setPage('home')}>
          <span className="icon-frame-small">🏠</span> Home
        </li>
        <li className={selected === 'favorites' ? 'selected' : ''} onClick={() => setPage('favorites')}>
          <span className="icon-frame-small">⭐</span> Favorites
        </li>
        <li className={selected === 'watch later' ? 'selected' : ''} onClick={() => setPage('watch later')}>
          <span className="icon-frame-small">⏰</span> Watch Later
        </li>
      </ul>

      {showActivities && (
        <>
          <hr />
          <ul className="activity-list">
            {activities.slice(0, 10).map((a, i) => (
              <Activity key={i} activity={a} />
            ))}
          </ul>
        </>
      )}
    </nav>
  );
}
