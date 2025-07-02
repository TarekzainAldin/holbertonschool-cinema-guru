import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Authentication from "./routes/auth/Authentication";
import Dashboard from "./routes/dashboard/Dashboard";

function App() {
  // State to manage authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Get accessToken from localStorage
    const accessToken = localStorage.getItem("accessToken");

    // If accessToken exists, make the API call
    if (accessToken) {
      axios
        .post(
          "http://localhost:8000/api/auth/",
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((response) => {
          // On success, update the states
          setIsLoggedIn(true);
          setUsername(response.data.username);
        })
        .catch((error) => {
          console.error("Authentication failed:", error);
        });
    }
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard
          userUsername={username} // Pass username to Dashboard
          setIsLoggedIn={setIsLoggedIn} // Pass setIsLoggedIn as prop
        />
      ) : (
        <Authentication
          setIsLoggedIn={setIsLoggedIn} // Pass setIsLoggedIn as prop
          setUserUsername={setUsername} // Pass setUserUsername as prop (setUsername)
        />
      )}
    </div>
  );
}

export default App;