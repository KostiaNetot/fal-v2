import React from 'react';

const AboutTeamMember = ({ teamMember }) => {
  const { name, speciality, description, img } = teamMember;
  return (
    <div className="team-slider__item">
    <img src={ img } alt="team-member"/>
    <div className="info">
      <h3>{ name }</h3>
      <p className="speciality">{ speciality }</p>
      <p className="descr">{ description }</p>
      <svg width="271" height="69" viewBox="0 0 271 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 69C0 69 160.013 62.391 212.929 48.9179C265.845 35.4448 271 0 271 0V32V59C271 64.5229 266.523 69 261 69H0Z" fill="url(#paint0_linear)"/>
        <defs>
          <linearGradient id="paint0_linear" x1="267.477" y1="1.66868" x2="126.164" y2="165.253" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFC000"/>
            <stop offset="1" stopColor="#FF8A00"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
  );
};

export default AboutTeamMember;
