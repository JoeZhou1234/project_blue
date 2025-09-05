import React from "react";
import "./ProjectsPage.css";

function ProjectsPage() {
  // Sample projects data - you can replace this with real data later
  const projects = [
    {
      id: 1,
      title: "Project Blue",
      description: "A living portfolio and collaboration hub for software projects. Built with React, Node.js, and PostgreSQL.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "OAuth"],
      status: "Active",
      githubUrl: "https://github.com/JoeZhou1234/project_blue",
      liveUrl: "https://joezhou.me",
      image: "/assets/project_blue_banner.png"
    },
    {
      id: 2,
      title: "Coming Soon",
      description: "More exciting projects are in development. Stay tuned for updates on our upcoming releases.",
      technologies: ["TBD"],
      status: "Planned",
      githubUrl: null,
      liveUrl: null,
      image: null
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="page-title">Our Projects</h1>
        <p className="page-description">
          Explore the innovative projects developed by the Project Blue team. 
          From web applications to experimental tools, each project showcases our commitment to quality and innovation.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {project.image && (
              <div className="project-image">
                <img 
                  src={process.env.PUBLIC_URL + project.image} 
                  alt={project.title}
                />
              </div>
            )}
            
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className={`project-status ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2>Have a Project Idea?</h2>
        <p>We're always looking for new challenges and collaboration opportunities.</p>
        <a href="/contact" className="cta-button">Get In Touch</a>
      </div>
    </div>
  );
}

export default ProjectsPage;
