import React from 'react';
import './WorkJourney.css';

const WorkJourney = () => {
  const experiences = [
    { year: '2015', title: 'Internship at WingFan', duration: '3 months' },
    { year: '2015', title: 'Starnine Elevators Pvt Ltd', duration: '6 months' },
    { year: '2016 - 2019', title: 'Suraj Enterprises', role: 'Site Supervisor - Sites at Hiranandani, Thane' },
    { year: '2020 - 2021', title: 'Suraj Enterprises ', role: 'Assistant Site Manager - Sites at Hiranandani, Thane' },
    { year: '2021 (Feb - June)', title: 'Diploma in UI/UX Development' },
    { year: '2021 - Present', title: 'Site Incharge For My Family Owned Business' },
  ];

  return (
    <div className="work-journey" id='work'>
      <h2>My Work Journey</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div className="timeline-item" key={index}>
            <div className="dot"></div>
            <div className="timeline-content">
              <h3>{experience.title}</h3>
              <p className="year">{experience.year} {experience.duration ? `(${experience.duration})` : ''}</p>
              {experience.role && <p className="role"><em>{experience.role}</em></p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkJourney;
