import React from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header';

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      {/* You can add other dashboard content here */}
      <h1>Dashboard Content Here</h1>
    </div>
  );
}

export default Dashboard;
