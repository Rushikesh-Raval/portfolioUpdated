import React from 'react';
import './Skills.css';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaCss3, FaHtml5 } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90, icon: <FaJs /> },
    { name: 'React', level: 85, icon: <FaReact /> },
    { name: 'Node.js', level: 80, icon: <FaNodeJs /> },
    { name: 'MongoDB', level: 75, icon: <FaDatabase /> },
    { name: 'CSS', level: 70, icon: <FaCss3 /> },
    { name: 'HTML', level: 95, icon: <FaHtml5 /> },
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
