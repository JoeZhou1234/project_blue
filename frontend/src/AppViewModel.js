// AppViewModel.js
// Handles business logic and state for App.js (MVVM pattern)

import { useState, useEffect } from "react";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export function useAppViewModel() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
    // eslint-disable-next-line
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/me`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const userData = await response.json();
        if (userData.googleId) setUser(userData);
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
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
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setUser(null);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return {
    user,
    loading,
    handleGoogleLogin,
    handleLogout,
  };
}
