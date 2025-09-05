import React from "react";
import "./UpcomingPage.css";

function UpcomingPage() {
  // Future: Move project data to database
  // Status badge mapping: "In Development" (10-99%), "Planning" (5-9%), "Research" (0-4%)
  const upcomingProjects = [
    {
      id: 1,
      title: "User Dashboard Enhancements",
      description: "Enhanced navigation bars and user experience for Project Blue homepage, projects, upcoming, about, and contact.",
      status: "In Development",
      expectedDate: "Q2 2025",
      technologies: ["React", "Node", "Express", "PostgreSQL"],
      progress: 55
    },
    {
      id: 2,
      title: "Collaborative Code Review Platform",
      description: "A platform for seamless code collaboration with real-time editing and advanced review features.",
      status: "Planning",
      expectedDate: "Q3 2025",
      technologies: ["ChatGPT API", "Stripe API", "WebSockets", "MongoDB"],
      progress: 5
    },
  ];

  // Future: Move news data to database
  const newsUpdates = [
    {
      id: 1,
      date: "2025-08-26",
      title: "Project Blue Planning Phase",
      content: "We're excited to announce the planning phase for Project Blue, which will include dashboard enhancements and navigation improvements."
    },
    {
      id: 2,
      date: "2025-08-25",
      title: "New Authentication System",
      content: "Successfully implemented Google OAuth authentication with enhanced security features and user session management."
    },
    {
      id: 3,
      date: "2025-08-21",
      title: "Welcome to Project Blue",
      content: "Project Blue officially launches as a collaborative portfolio platform for developers and creators."
    }
  ];

  return (
    <div className="upcoming-container">
      <div className="upcoming-header">
        <h1 className="page-title">What's Coming Next</h1>
        <p className="page-description">
          Stay updated with our latest developments, upcoming projects, and exciting features in the pipeline.
        </p>
      </div>

      <div className="content-sections">
        <section className="projects-section">
          <h2 className="section-title">
            <span className="icon">🚀</span>
            Upcoming Projects
          </h2>
          <div className="upcoming-projects">
            {upcomingProjects.map((project) => (
              <div key={project.id} className="upcoming-card">
                <div className="card-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-details">
                  <div className="expected-date">
                    <strong>Expected Release:</strong> {project.expectedDate}
                  </div>
                  
                  <div className="progress-section">
                    <div className="progress-header">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="news-section">
          <h2 className="section-title">
            <span className="icon">📰</span>
            Latest News & Updates
          </h2>
          <div className="news-timeline">
            {newsUpdates.map((news) => (
              <div key={news.id} className="news-item">
                <div className="news-date">
                  {new Date(news.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
                <div className="news-content">
                  <h4 className="news-title">{news.title}</h4>
                  <p className="news-text">{news.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="roadmap-section">
        <h2 className="section-title">
          <span className="icon">🗺️</span>
          Development Roadmap
        </h2>
        {/* Future: Move roadmap data to database */}
        <div className="roadmap">
          <div className="roadmap-item">
            <div className="roadmap-quarter">Q1 2025</div>
            <div className="roadmap-content">
              <h4>Foundation & Core Features</h4>
              <ul>
                <li>✅ OAuth Authentication System</li>
                <li>✅ Multi-page Navigation</li>
                <li>🔄 User Dashboard Enhancement</li>
              </ul>
            </div>
          </div>
          
          <div className="roadmap-item">
            <div className="roadmap-quarter">Q2 2025</div>
            <div className="roadmap-content">
              <h4>Planned Tools</h4>
              <ul>
                <li>📅 Real-time Collaboration Tools</li>
                <li>📅 AI-Powered Tools</li>
              </ul>
            </div>
          </div>
          
          <div className="roadmap-item">
            <div className="roadmap-quarter">Q3 2025</div>
            <div className="roadmap-content">
              <h4>Community & Collaboration</h4>
              <ul>
                <li>📅 Code Review Platform</li>
                <li>📅 Community Features</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

{/* not yet working */}
      <div className="subscribe-section">
        <h2>Stay Updated</h2>
        <p>Want to be the first to know about new features and updates?</p>
        <div className="subscribe-form">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="email-input"
          />
          <button className="subscribe-btn">Subscribe</button>
        </div>
        <p className="subscribe-note">
          We'll only send you important updates about Project Blue. No spam, ever.
        </p>
      </div>
    </div>
  );
}

export default UpcomingPage;
