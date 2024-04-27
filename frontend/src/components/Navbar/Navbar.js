// Navbar.js
import React from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Remove token and isAuthenticated flag from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    // Navigate to the home page or any other desired route
    navigate("/");
  };

  // Determine if the current route is the profile page
  const isProfilePage = location.pathname === "/profile";

  return (
    <nav>
      <Link to="/dashboard" className="link">
        TaskPlan
      </Link>
      <div className="menu-items">
        {isLoggedIn ? (
          <>
            {!isProfilePage && ( // Render only if not on profile page
              <Link className="link" to="/profile">
                Profile
              </Link>
            )}
            <button className="link" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="link" to="/signup">
              Sign Up
            </Link>
            <Link className="link" to="/signin">
              Sign In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
