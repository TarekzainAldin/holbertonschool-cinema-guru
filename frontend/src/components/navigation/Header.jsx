import React from "react";
import PropTypes from "prop-types";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Header({ userUsername, setIsLoggedIn }) {
  // Logout function to handle user logout
  const logout = () => {
    // Remove access token from localStorage
    localStorage.removeItem("accessToken");

    // Set the isLoggedIn state to false
    setIsLoggedIn(false);
  };

  return (
    <nav className="header-nav">
      <span>Cinema Guru</span>
      <div>
        <img
          src="https://picsum.photos/100/100"
          alt="User Avatar"
          className="avatar"
        />
        <p>Welcome, {userUsername}!</p>
        <span onClick={logout} className="logout">
          <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
          <i className="fas fa-sign-out-alt"></i>{" "}
          {/* Font Awesome icon for logout */}
          Logout
        </span>
      </div>
    </nav>
  );
}

Header.propTypes = {
  userUsername: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Header;
