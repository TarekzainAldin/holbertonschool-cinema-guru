import React from 'react';
import './navigation.css';

function Header({ userUsername, setIsLoggedIn }) {
  function logout() {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  }

  return (
    <header className="header">
      <div className="rect-full"></div>
      <div className="rect-main"></div>
      <div className="top-bar"></div>
      <div className="side-bar"></div>
      <div className="side-bar-top"></div>

      {/* Date Filters */}
      <div className="date-filter">
        <label className="date-label">Min Date</label>
        <span className="colon">:</span>
        <label className="date-label">Max Date</label>
        <span className="colon">:</span>
        <label className="date-label">Sort</label>
        <span className="colon">:</span>
      </div>

      {/* Search Box */}
      <div className="search-box"></div>

      {/* Nav Buttons */}
      <nav className="nav-buttons">
        {[
          'Action','Drama','Comedy','Biography','Romance',
          'Thriller','War','History','Sport','Sci‑Fi',
          'Documentary','Crime','Fantasy'
        ].map(item => (
          <button key={item} className="nav-btn">{item}</button>
        ))}
      </nav>

      {/* Title */}
      <div className="title">Cinema Guru</div>

      {/* User area */}
      <div className="user-area">
        <div className="profile-pic">
          <img src="https://picsum.photos/41/41" alt="User Avatar" />
        </div>
        <div className="welcome">
          <span>Welcome,</span>
          <span className="username">{userUsername}</span>
          <span>!</span>
        </div>
        <button className="logout" onClick={logout} aria-label="Logout">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path fillRule="evenodd" d="M6 3a1 1 0 0 0-1 1v2h1V4h7v8H6v-2H5v2a1 1 0 0 0 1 1h7a1 1 0 0 0-1-1V4a1 1 0 0 0-1-1H6z"/>
            <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708L3.793 4H2.5a.5.5 0 0 1 0-1h3.5a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0V5.707L.854 8.354a.5.5 0 0 1-.708 0z"/>
          </svg>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
