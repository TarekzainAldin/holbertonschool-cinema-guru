import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Activity from '../Activity';
import './navigation.css';

export default function SideBar() {
  const [selected, setSelected] = useState('home');
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);

  const navigate = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName.toLowerCase());
    switch (pageName.toLowerCase()) {
      case 'home':
        navigate('/home');
        break;
      case 'favorites':
        navigate('/favorites');
        break;
      case 'watch later':
        navigate('/watchlater');
        break;
      default:
        navigate('/home');
    }
  };

  useEffect(() => {
    axios.get('/api/activity')
      .then(res => {
        setActivities(res.data);
        setShowActivities(true);
      })
      .catch(err => {
        console.error('Failed to load activities:', err);
      });
  }, []);

  return (
    <nav className="sidebar">
      <ul className="navigation-list">
        <li
          className={selected === 'home' ? 'selected' : ''}
          onClick={() => setPage('Home')}
        >
          <span className="icon-frame-small icon-frame-home">🏠</span>
          Home
        </li>

        {/* Red rectangle behind the favorites icon */}
        <span className="icon-frame-rectangle"></span>

        <li
          className={selected === 'favorites' ? 'selected' : ''}
          onClick={() => setPage('Favorites')}
        >
          <span className="icon-frame-small icon-frame-favorites">⭐</span>
          Favorites
        </li>

        <li
          className={selected === 'watch later' ? 'selected' : ''}
          onClick={() => setPage('Watch Later')}
        >
          <span className="icon-frame-small icon-frame-watchlater">⏰</span>
          Watch Later
        </li>
      </ul>

      {showActivities && (
        <ul className="activity-list">
          {activities.slice(0, 10).map((activity, index) => (
            <Activity key={index} activity={activity} />
          ))}
        </ul>
      )}
    </nav>
  );
}
