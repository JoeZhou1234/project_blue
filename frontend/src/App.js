import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/me`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        const userData = await response.json();
        if (userData.googleId) {
          setUser(userData);
        }
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${API_BASE_URL}/auth/google`;
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/signout`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        setUser(null);
        window.location.reload();
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <img 
        src={process.env.PUBLIC_URL + "/assets/project_blue_banner.png"} 
        alt="Project Blue Banner" 
        width="600" 
        height="250" 
        className="banner-image"
      />
      <h1 className="main-title">Project Blue</h1>
      <p className="subtitle">
        A living portfolio and collaboration hub for software projects.
      </p>
      
      {user ? (
        <div className="user-card">
          <h3 className="welcome-title">Welcome back!</h3>
          <p className="user-name">
            <strong>{user.displayName}</strong>
          </p>
          <p className="user-subtitle">
            You are successfully signed in to Project Blue.
            {user.isSubscribed && (
              <span style={{color: "#28a745", fontWeight: "500"}}> • Premium Member</span>
            )}
          </p>
          <button
            onClick={handleLogout}
            className="logout-btn"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="login-section">
          <p className="login-description">
            Sign in to access your personalized portfolio dashboard and contribute to the Project Blue community.
          </p>
          <button
            onClick={handleGoogleLogin}
            className="google-login-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="white"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="white"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="white"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="white"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </button>
          
          <div className="info-box">
            <p className="info-text">
              By signing in, you'll gain access to personalized features, contribute to collaborative projects, 
              and help build the future of Project Blue together.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
