import React from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header';
// import SideBar from '../../components/navigation/SideBar';

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <div className="dashboard-main">
        {/* <SideBar /> */}
        <main className="dashboard-content">
          <h1>Dashboard Content Here</h1>
          {/* Add your dashboard content */}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
