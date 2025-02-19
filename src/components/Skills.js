import React from 'react';
import './Skills.css';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaCss3, FaHtml5 } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, icon: <FaHtml5/> },
    { name: 'CSS', level: 85, icon: <FaCss3 /> },
    { name: 'JS', level: 80, icon: <FaJs /> },
    { name: 'React', level: 75, icon: <FaReact /> },
  ];

  return (
    <div className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: `${skill.level}%` }} />
            </div>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
