import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // State variables for login status and username
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status
  const [username, setUsername] = useState(""); // State for username

  // Function to handle login/logout
  const handleLogin = () => {
    // Toggle the login status
    setIsLoggedIn(!isLoggedIn);
    // For demonstration purposes, set an example username
    setUsername("exampleUser");
  };

  return (
    <header>
      {/* Navigation menu */}
      <nav>
        <ul>
          {/* Navigation links */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          {/* Add more navigation items here */}
        </ul>
      </nav>
      {/* Display welcome message if logged in */}
      {isLoggedIn && <p>Welcome, {username}!</p>}
      {/* Display login/logout button */}
      {isLoggedIn ? (
        <button onClick={handleLogin}>Logout</button>
      ) : (
        <p>Please login to continue.</p>
      )}
    </header>
  );
};

export default Header;
