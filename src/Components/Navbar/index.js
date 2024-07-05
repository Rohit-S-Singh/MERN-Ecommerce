// Navbar.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './style.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.isAuthenticated);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
      </ul>
      <ul className="navbar-nav">
        {!isAuthenticated ? (
          <>
            <li className="nav-item">
              <Link to="/LoginForm" className="auth-link">Login</Link> {/* Use Link for Login */}
            </li>
            <li className="nav-item">
              <Link to="/signup" className="auth-link signup-btn">Sign Up</Link> {/* Use Link for Sign Up */}
            </li>
          </>
        ) : (
          <li className="nav-item">
            <button className="auth-btn" onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
