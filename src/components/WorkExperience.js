import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './WorkExperience.css';
import { FaBriefcase, FaGithub, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import certificateImage from '../WebClone Internship Certificate.png';

const WorkExperience = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (showCertificate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showCertificate]);

  const experiences = [
    {
      title: 'Web Clone Internship',
      company: 'NxtWave',
      period: 'June 2025 - July 2025',
      project: {
        name: 'Nxt-Talk - Web Clone Internship Project',
        description: 'NxtTalk a fully responsive website build with HTML, CSS, Bootstrap, build as part of my journey in Web Clone Internship offered by NxtWave.'
      },
      skills: ['HTML5', 'CSS Flexbox', 'Cascading Style Sheets (CSS)', 'Bootstrap (Framework)', 'Netlify', 'Git', 'GitHub'],
      github: 'https://github.com/SabreeshRajN/NxtTalk-Project',
      live: 'https://nxttalk-bysab.netlify.app'
    }
  ];

  return (
    <section id="work-experience" className="work-experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-icon">
                  <FaBriefcase />
                </div>
                <div className="experience-info">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
              
              <div className="project-section">
                <h4 className="project-name">{exp.project.name}</h4>
                <p className="project-description">{exp.project.description}</p>
              </div>
              
              <div className="experience-skills">
                <strong>Skills:</strong>
                <div className="skills-tags">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="experience-links">
                <a href={exp.github} target="_blank" rel="noopener noreferrer" className="exp-link">
                  <FaGithub /> View Code
                </a>
                <a href={exp.live} target="_blank" rel="noopener noreferrer" className="exp-link">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <button onClick={() => setShowCertificate(true)} className="exp-link cert-button">
                  <FaCertificate /> Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal - Rendered via Portal */}
      {showCertificate && ReactDOM.createPortal(
        <div className="certificate-modal" onClick={() => setShowCertificate(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowCertificate(false)}>
              ×
            </button>
            <h3 className="cert-modal-title">Web Clone Internship Certificate</h3>
            <img src={certificateImage} alt="Web Clone Internship Certificate" className="certificate-image" />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default WorkExperience;
