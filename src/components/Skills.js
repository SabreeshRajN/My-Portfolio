import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: '💻',
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'SQL']
    },
    {
      category: 'Web Development',
      icon: '🌐',
      skills: [
        'HTML5',
        'CSS3',
        'CSS Flexbox',
        'Bootstrap',
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'MySQL'
      ]
    },
    {
      category: 'AI & Cloud Technologies',
      icon: '🤖',
      skills: [
        'Artificial Intelligence',
        'Machine Learning',
        'Cloud Computing',
        'Microsoft Azure'
      ]
    },
    {
      category: 'Development Tools',
      icon: '🛠️',
      skills: [
        'Git',
        'GitHub',
        'Netlify',
        'Cursor',
        'Model Context Protocol (MCP)'
      ]
    },
    {
      category: 'Design & Creative',
      icon: '🎨',
      skills: [
        'Adobe XD',
        'Figma',
        'Photoshop',
        'Canva'
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.category}</h3>
              </div>
              <div className="skills-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
