import React from 'react';
import './Hero.css';
import profilePic from '../pic.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="profile-image-container">
            <img src={profilePic} alt="Sabreesh Raj Nagarajan" className="profile-image" />
          </div>
          <div className="hero-text">
            <h1 className="hero-name">Sabreesh Raj Nagarajan</h1>
            <p className="hero-title">Pre-Final Year | Emerging in MERN Stack Development | AIML Enthusiast</p>
            <p className="hero-location">Dindigul, Tamil Nadu, India</p>
            <p className="hero-description">
              I'm an emerging Machine Learning and AI enthusiast, always eager to learn and grow in smart technologies.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
