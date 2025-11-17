import React from 'react';
import { FaHome, FaUser, FaGraduationCap, FaBriefcase, FaCode, FaCertificate, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ activeSection }) => {
  const navItems = [
    { id: 'home', icon: <FaHome />, label: 'Home' },
    { id: 'about', icon: <FaUser />, label: 'About' },
    { id: 'education', icon: <FaGraduationCap />, label: 'Education' },
    { id: 'work-experience', icon: <FaBriefcase />, label: 'Experience' },
    { id: 'skills', icon: <FaCode />, label: 'Skills' },
    { id: 'certifications', icon: <FaCertificate />, label: 'Certifications' },
    { id: 'projects', icon: <FaProjectDiagram />, label: 'Projects' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bottom-navbar">
      <div className="nav-container">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => scrollToSection(item.id)}
            aria-label={item.label}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
