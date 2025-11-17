import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">Summary</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm an emerging Machine Learning and AI enthusiast, always eager to learn and grow in smart technologies. 
              I'm currently training at NxtWave's CCBP 4.0 Academy, learning MERN Stack Development and gaining practical 
              experience in modern tech tools.
            </p>
            <p>
              Along with tech, I also love Graphic Designing. I enjoy combining my creativity with technical skills to 
              build useful and visually appealing digital solutions.
            </p>
            <p>
              Let's connect and grow together in this exciting tech journey!
            </p>
          </div>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <h3>AI & ML</h3>
            <p>Enthusiast</p>
          </div>
          <div className="stat-item">
            <h3>MERN</h3>
            <p>Stack Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
