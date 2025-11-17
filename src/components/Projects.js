import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Nxt-Talk - Web Clone Internship Project',
      description: 'NxtTalk a fully responsive website build with HTML, CSS, Bootstrap, build as part of my journey in Web Clone Internship offered by NxtWave.',
      technologies: ['HTML5', 'CSS Flexbox', 'Bootstrap', 'Git', 'GitHub', 'Netlify'],
      github: 'https://github.com/SabreeshRajN/NxtTalk-Project',
      live: 'https://nxttalk-bysab.netlify.app'
    },
    {
      title: 'Design - Responsive Website',
      description: 'Design, a fully responsive and user-friendly website built as part of my journey through the "Build Your Own Responsive Website" course from CCBP 4.0 Academy | NxtWave.',
      technologies: ['HTML5', 'CSS Flexbox', 'Bootstrap', 'Git', 'GitHub', 'Netlify'],
      github: 'https://github.com/SabreeshRajN/design-webpage',
      live: 'https://designwebpage.netlify.app'
    },
    {
      title: 'Startup Success Predictor Model',
      description: 'An advanced machine learning model that predicts startup success rates and forecasts potential profit values for the first business year. Built with comprehensive data analysis and predictive algorithms to help entrepreneurs make data-driven decisions about their business ventures.',
      technologies: ['Python', 'Machine Learning', 'Data Science', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Git', 'GitHub'],
      github: 'https://github.com/SabreeshRajN/Startup-Success-Predictor',
      live: '#'
    },
    {
      title: 'Focus Monitor App',
      description: 'An application that leverages Python and OpenCV to track visual engagement for personalized learning.',
      technologies: ['Python', 'HTML5', 'CSS Flexbox', 'JavaScript', 'Git', 'GitHub'],
      github: 'https://github.com/SabreeshRajN/Focus-Monitor-App',
      live: '#'
    },
    {
      title: 'VR Fitness Trainer',
      description: 'This is an immersive VR application featuring an animated personal trainer who demonstrates correct exercise techniques in a virtual gym.',
      technologies: ['Unity', 'C#', 'Git', 'GitHub'],
      github: 'https://github.com/SabreeshRajN/VR-Fitness-Trainer',
      live: '#'
    },
    {
      title: 'Online Course Certificate Generator',
      description: 'The Online Course Certificate Generator is a secure, full-stack application that manages and instantly generates unique, downloadable PDF certificates for authenticated users.',
      technologies: ['ReactJS', 'CSS', 'Java', 'Spring Boot', 'Git', 'GitHub', 'Netlify'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link" aria-label="GitHub">
                  <FaGithub /> Code
                </a>
                <a href={project.live} className="project-link" aria-label="Live Demo">
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
