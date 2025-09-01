import React, { useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

//   will need to be put in DB
  const contributors = [
    {
      id: 1,
      name: "Xing Yu (Joe) Zhou",
      role: "Founder & Lead Developer",
      bio: "Passionate software developer with expertise in full-stack web development. Dedicated to creating innovative solutions and fostering collaborative development environments.",
      email: "mr.joezhou@gmail.com",
      linkedin: "https://www.linkedin.com/in/xing-yu-joe-zhou-27814124b/",
      github: "https://github.com/JoeZhou1234",
      avatar: null, // Avatar image (Default is Initials)
      skills: ["React", "Node.js", "PostgreSQL", "JavaScript", "Python", "Git"]
    },
    {
      id: 2,
      name: "Morgan Zhou",
      role: "Co-Founder & Developer",
      bio: "Software developer with expertise in full-stack development.",
      email: "maogenzhou@gmail.com",
      linkedin: "https://www.linkedin.com/in/morgan-zhou-47798a17/",
      github: "https://github.com/morganzhou73",
      avatar: null,
      skills: ["Java", "Angular", "React", "MySQL", "PostgreSQL", "Git"]
    }
  ];

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-description">
          Have a question, collaboration idea, or just want to say hello? 
          We'd love to hear from you!
        </p>
      </div>

      <div className="contact-content">
        <section className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </section>

        <section className="contact-info-section">
          <h2>Other Ways to Connect</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">📧</div>
              <div className="method-content">
                <h4>Email</h4>
                <a href="mailto:mr.joezhou@gmail.com">mr.joezhou@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">💼</div>
              <div className="method-content">
                <h4>LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/xing-yu-joe-zhou-27814124b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Connect with me professionally
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">🐙</div>
              <div className="method-content">
                <h4>GitHub</h4>
                <a 
                  href="https://github.com/JoeZhou1234" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View my code repositories
                </a>
              </div>
            </div>
          </div>

          <div className="response-time">
            <h3>Response Time</h3>
            <p>
              I typically respond to messages within 24-48 hours. 
              For urgent matters, please reach out via LinkedIn or email directly.
            </p>
          </div>
        </section>
      </div>

      <section className="contributors-section">
        <h2>Our Team</h2>
        <p className="contributors-intro">
          Meet the talented individuals behind Project Blue. As our community grows, 
          this section will showcase all our amazing contributors.
        </p>
        
        <div className="contributors-grid">
          {contributors.map((contributor) => (
            <div key={contributor.id} className="contributor-card">
              <div className="contributor-avatar">
                {contributor.avatar ? (
                  <img src={contributor.avatar} alt={contributor.name} />
                ) : (
                  <div className="avatar-placeholder">
                    {contributor.name.split(" ").map(n => n[0]).filter(char => /[a-zA-Z]/.test(char)).join("")}
                  </div>
                )}
              </div>
              
              <div className="contributor-info">
                <h3 className="contributor-name">{contributor.name}</h3>
                <p className="contributor-role">{contributor.role}</p>
                <p className="contributor-bio">{contributor.bio}</p>
                
                <div className="contributor-skills">
                  {contributor.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
                
                <div className="contributor-links">
                  {contributor.email && (
                    <a href={`mailto:${contributor.email}`} className="contributor-link email">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                      </svg>
                    </a>
                  )}
                  {contributor.linkedin && (
                    <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer" className="contributor-link linkedin">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19S5.19 5.95 5.19 6.88A1.69 1.69 0 0 0 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
                      </svg>
                    </a>
                  )}
                  {contributor.github && (
                    <a href={contributor.github} target="_blank" rel="noopener noreferrer" className="contributor-link github">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="join-team">
          <h3>Interested in Contributing?</h3>
          <p>
            Project Blue is always looking for passionate developers, designers, and creators 
            to join our collaborative community. Whether you're interested in contributing code, 
            design, or ideas, we'd love to hear from you!
          </p>
          <a href="mailto:mr.joezhou@gmail.com?subject=Contributing to Project Blue" className="join-btn">
            Join Our Team
          </a>
          <p className="email-fallback">
            <small>
              <em>If the button doesn't work, please email us directly at </em>
              <strong>mr.joezhou@gmail.com</strong>
              <em> with the subject: "Contributing to Project Blue"</em>
            </small>
          </p>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
