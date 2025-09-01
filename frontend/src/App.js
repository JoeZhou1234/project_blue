import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import UpcomingPage from "./pages/UpcomingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import { useAppViewModel } from "./AppViewModel";
import "./App.css";

function App() {
  const { user, loading, handleGoogleLogin, handleLogout } = useAppViewModel();

  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Navigation user={user} handleLogout={handleLogout} />
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  user={user} 
                  handleGoogleLogin={handleGoogleLogin} 
                  handleLogout={handleLogout} 
                />
              } 
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
