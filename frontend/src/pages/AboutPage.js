import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-header">
        <img 
          src={process.env.PUBLIC_URL + "/assets/project_blue_banner.png"} 
          alt="Project Blue Banner" 
          className="about-banner"
        />
        <h1 className="page-title">About Project Blue</h1>
        <p className="page-subtitle">
          A living portfolio and collaboration hub for software projects
        </p>
      </div>

      <div className="about-content">
        <section className="intro-section">
          <h2>What is Project Blue?</h2>
          <p>
            Project Blue is a professional web platform designed to showcase my work as a software developer 
            and provide a space for collaborators to feature their projects as well. It represents more than 
            just a portfolio—it's a platform to create, collaborate, and showcase the journey of becoming a 
            better developer.
          </p>
        </section>

        <section className="purpose-section">
          <h2>Our Purpose</h2>
          <div className="purpose-grid">
            <div className="purpose-card">
              <div className="purpose-icon">💼</div>
              <h3>Portfolio Hub</h3>
              <p>
                Employers can view my skills, experiences, and past projects in one centralized, 
                professional location.
              </p>
            </div>
            <div className="purpose-card">
              <div className="purpose-icon">🚀</div>
              <h3>Project Showcase</h3>
              <p>
                Live demos and detailed write-ups highlight the technical work and thought 
                process behind each application.
              </p>
            </div>
            <div className="purpose-card">
              <div className="purpose-icon">🤝</div>
              <h3>Collaboration Space</h3>
              <p>
                Contributors can display their own work, demonstrating teamwork and 
                shared innovation in software development.
              </p>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <h2>Our Vision</h2>
          <p>
            The goal of Project Blue is to combine professionalism with creativity, creating a platform that:
          </p>
          <ul className="vision-list">
            <li>Presents my career, skills, and values in a clear and engaging format</li>
            <li>Offers interactive examples of software I've built, ranging from web apps to experimental tools</li>
            <li>Builds a living platform that evolves as I grow as a developer</li>
            <li>Fosters collaboration and knowledge sharing within the developer community</li>
          </ul>
        </section>

        <section className="highlights-section">
          <h2>Key Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-item">
              <span className="highlight-icon">🌍</span>
              <div className="highlight-content">
                <h4>Centralized Portfolio</h4>
                <p>Personal and collaborative projects in one unified platform</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🔧</span>
              <div className="highlight-content">
                <h4>Live Applications</h4>
                <p>Deployed web applications demonstrating practical skills</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">👥</span>
              <div className="highlight-content">
                <h4>Team Collaboration</h4>
                <p>Contributor pages showcasing team members and joint projects</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🚀</span>
              <div className="highlight-content">
                <h4>Continuous Evolution</h4>
                <p>Regular updates as new projects are completed and skills developed</p>
              </div>
            </div>
          </div>
        </section>

        <section className="technology-section">
          <h2>Technology Stack</h2>
          <p>Project Blue is built with modern, industry-standard technologies:</p>
          <div className="tech-categories">
            <div className="tech-category">
              <h4>Frontend</h4>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">JavaScript (ES6+)</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">React Router</span>
              </div>
            </div>
            <div className="tech-category">
              <h4>Backend</h4>
              <div className="tech-tags">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Sequelize ORM</span>
              </div>
            </div>
            <div className="tech-category">
              <h4>Authentication & Security</h4>
              <div className="tech-tags">
                <span className="tech-tag">Google OAuth 2.0</span>
                <span className="tech-tag">Passport.js</span>
                <span className="tech-tag">Express Sessions</span>
              </div>
            </div>
            <div className="tech-category">
              <h4>Development & Deployment</h4>
              <div className="tech-tags">
                <span className="tech-tag">Git</span>
                <span className="tech-tag">GitHub</span>
                <span className="tech-tag">npm</span>
                <span className="tech-tag">Nodemon</span>
              </div>
            </div>
          </div>
        </section>

        <section className="journey-section">
          <h2>The Development Journey</h2>
          <div className="journey-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Concept & Planning</h4>
                <p>Identified the need for a comprehensive portfolio platform that goes beyond traditional static websites.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Foundation Development</h4>
                <p>Built the core architecture with React frontend and Node.js backend, establishing the database structure.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Authentication Integration</h4>
                <p>Implemented secure Google OAuth authentication system for user management and personalization.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker current"></div>
              <div className="timeline-content">
                <h4>Multi-Page Navigation</h4>
                <p>Currently expanding the platform with comprehensive navigation and dedicated sections for different content types.</p>
              </div>
            </div>
            <div className="timeline-item future">
              <div className="timeline-marker future"></div>
              <div className="timeline-content">
                <h4>Future Enhancements</h4>
                <p>Planned features include real-time collaboration tools, AI-powered applications, and community collaboration features.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
