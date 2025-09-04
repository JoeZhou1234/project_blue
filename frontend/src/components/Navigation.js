import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation({ user, handleLogout }) {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <img 
            src={process.env.PUBLIC_URL + "/assets/project_blue_banner.png"} 
            alt="Project Blue"
            className="nav-logo"
          />
          <span className="nav-title">Project Blue</span>
        </Link>
        
        <div className="nav-menu">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/projects" className={isActive("/projects")}>
            Projects
          </Link>
          <Link to="/upcoming" className={isActive("/upcoming")}>
            Upcoming
          </Link>
          <Link to="/about" className={isActive("/about")}>
            About
          </Link>
          <Link to="/contact" className={isActive("/contact")}>
            Contact
          </Link>
        </div>

        <div className="nav-auth">
          {user ? (
            <div className="user-menu">
              <span className="user-name">Welcome, {user.displayName}</span>
              <button onClick={handleLogout} className="logout-btn-nav">
                Sign Out
              </button>
            </div>
          ) : (
            <div className="auth-placeholder">
              {/* OAuth login will be handled on individual pages */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
