import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const experiences = [
    {
      title: 'Bachelor of Engineering - Computer Science Engineering ( Artificial Intelligence and Machine Learning )',
      company: 'Sri Krishna College of Technology, Coimbatore.',
      period: '2023 - 2027',
      skills: 'Artificial Intelligence · Machine Learning · Cloud Computing · Microsoft Azure · Python · C++ · Java · HTML5 · Cascading Style Sheets (CSS) · Bootstrap (Framework)'
    },
    {
      title: 'CCBP 4.0 Technology , MERN STACK',
      company: 'NxtWave',
      period: 'May 2025',
      description: 'Fellow at CCBP 4.0 Academy | NxtWave',
      skills: 'Bootstrap (Framework) · CSS Flexbox · Cascading Style Sheets (CSS) · HTML5 · Python · MySQL'
    },
    {
      title: 'Senior Secondary Education',
      company: 'DNU SMBM National Public School, Dindigul.',
      period: 'Mar 2023',
      description: 'Grade: 70%'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="company-name">{exp.company}</h4>
                {exp.description && <p className="timeline-description">{exp.description}</p>}
                {exp.skills && (
                  <div className="skills-section">
                    <strong>Skills:</strong> {exp.skills}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
